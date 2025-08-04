-- CreateTable
CREATE TABLE "brokers" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "stripeCustomerId" TEXT,
    "subscriptionStatus" TEXT,
    "hasAccess" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "brokers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_details" (
    "id" TEXT NOT NULL,
    "tradingName" TEXT NOT NULL,
    "yearsTrading" INTEGER NOT NULL,
    "companySize" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyHouseNumber" TEXT NOT NULL,
    "companyPhoneNumber" TEXT NOT NULL,
    "financeType" TEXT[],
    "fcaRegistrationNumber" TEXT,
    "companyAddress" TEXT NOT NULL,
    "brokerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "director_details" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "drivingLicenseFrontUrl" TEXT,
    "drivingLicenseBackUrl" TEXT,
    "brokerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "director_details_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "brokers_email_key" ON "brokers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "brokers_stripeCustomerId_key" ON "brokers"("stripeCustomerId");

-- CreateIndex
CREATE UNIQUE INDEX "company_details_brokerId_key" ON "company_details"("brokerId");

-- CreateIndex
CREATE UNIQUE INDEX "director_details_brokerId_key" ON "director_details"("brokerId");

-- AddForeignKey
ALTER TABLE "company_details" ADD CONSTRAINT "company_details_brokerId_fkey" FOREIGN KEY ("brokerId") REFERENCES "brokers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "director_details" ADD CONSTRAINT "director_details_brokerId_fkey" FOREIGN KEY ("brokerId") REFERENCES "brokers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
