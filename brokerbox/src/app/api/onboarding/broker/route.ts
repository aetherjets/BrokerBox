import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
        }

        const clerk = await clerkClient();
        const user = await clerk.users.getUser(userId);
        const email = user.emailAddresses[0]?.emailAddress;
        if (!email) {
            return new Response(JSON.stringify({ error: "Email not found" }), { status: 400 });
        }

        const { companyDetails, directorDetails } = await req.json();

        const existingBroker = await db.broker.findUnique({
            where: { email },
            select: { id: true }
        });

        if (!existingBroker) {
            console.log("Broker does not exist for email:", email);
            return new Response(JSON.stringify({ message: "Broker does not exist" }), { status: 404 });
        }

        const brokerId = existingBroker.id;
        console.log("Details are", {
            companyDetails,
            directorDetails,
            email,
            brokerId
        });
        
        const [newBrokerCompanyDetails, newBrokerDirectorDetails] = await db.$transaction([
            db.companyDetails.create({
                data: {
                    tradingName: companyDetails.tradingName,
                    yearsTrading: parseInt(companyDetails.yearsTrading, 10),
                    companySize: companyDetails.companySize,
                    companyName: companyDetails.companyName,
                    companyHouseNumber: companyDetails.companyHouseNumber,
                    companyPhoneNumber: companyDetails.companyTelephone,
                    financeType: companyDetails.financeTypes,
                    fcaRegistrationNumber: companyDetails.fcaNumber,
                    companyAddress: companyDetails.companyAddress,
                    broker: { connect: { id: brokerId } }
                }
            }),
            db.directorDetails.create({
                data: {
                    name: directorDetails.name,
                    address: directorDetails.address,
                    mobile: directorDetails.mobile,
                    email: directorDetails.email,
                    dateOfBirth: new Date(directorDetails.dateOfBirth),
                    drivingLicenseFrontUrl: directorDetails.drivingLicenseFront,
                    drivingLicenseBackUrl: directorDetails.drivingLicenseRear,
                    broker: { connect: { id: brokerId } }
                }
            })
        ]);

        return new Response(JSON.stringify({ companyDetails: newBrokerCompanyDetails, directorDetails: newBrokerDirectorDetails }), { status: 201 });
    } catch (error) {
        console.error("Error in broker onboarding API:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}