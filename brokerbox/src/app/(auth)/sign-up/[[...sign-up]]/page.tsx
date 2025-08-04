import { SignUp } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-stone-100 flex flex-col items-center justify-center px-4 py-12">
      {/* Header with branding */}
      <div className="mb-8 text-center">
        <Link href="/" className="inline-block">
          <h1 className="text-3xl font-bold text-black">
            Broker<span className="text-stone-500">Box</span>
          </h1>
        </Link>
        <p className="mt-2 text-stone-600">
          Create your account and join the UK&apos;s premier broker platform
        </p>
      </div>

      <div>
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto w-full",
              card: "shadow-none p-6 sm:p-8",
              header: "text-center font-bold text-2xl",
              footer: "text-center text-sm text-stone-500",
            }
          }}
          forceRedirectUrl={'/onboarding'}
        />
      </div>
      
    </div>
  )
}

export default SignUpPage
