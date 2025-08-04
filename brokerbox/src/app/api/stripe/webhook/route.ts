import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { db } from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET_DEV!;

console.log("stripe Values:", {
    stripe, webhookSecret
})

export async function POST(req: NextRequest) {

    const body = await req.text();


    const headersList = await headers();
    const signature = headersList.get('stripe-signature');

    let event;

    // verify Stripe event is legit
    try {
        if (!signature) {
            throw new Error('Missing stripe signature');
        }
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
        if (err instanceof Error) {
            console.error(`Webhook signature verification failed.`, err.message);
        } else {
            console.error(`Webhook signature verification failed.`, err);
        }
        return NextResponse.json({ error: "Invalid Signature" }, { status: 400 });
    }

    const eventType = event.type;

    try {
        if (eventType === 'checkout.session.completed') {
 
                const session = event.data.object as Stripe.Checkout.Session;

                const email = session.customer_details?.email || session.customer_email;
                const customerId = session.customer as string;
                // const sessionId = session.id;

                if (!email) throw new Error('❌ No email found in session');

                console.log('✅ Stripe payment complete. Email:', email);

                        await db.broker.upsert({
                        where: { email },
                        update: {},
                        create: {
                                    email,
                                    stripeCustomerId: customerId,
                                    subscriptionStatus: 'active',
                                }

            });
            console.log('✅ Broker created with email:', email);
        }
    } catch (e) {
    if (e instanceof Error) {
        console.error(`❌ Stripe webhook error: ${e.message} | Event: ${eventType}`);
        return NextResponse.json({ error: e.message }, { status: 500 });
    } else {
        console.error(`❌ Stripe webhook error: ${String(e)} | Event: ${eventType}`);
        return NextResponse.json({ error: String(e) }, { status: 500 });
    }
    }

    return NextResponse.json({ received: true }, { status: 200 });
}