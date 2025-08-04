// import Stripe from 'stripe';
// import { NextRequest, NextResponse } from 'next/server';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(req: NextRequest) {
//   const { email } = await req.json();

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       mode: 'payment',
//       line_items: [
//         {
//           price: process.env.STRIPE_PRICE_ID!,
//           quantity: 1,
//         },
//       ],
//       customer_email: email,
//       success_url: `${req.headers.get('origin')}/onboarding?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${req.headers.get('origin')}/pricing`,
//     });

//     return NextResponse.json({ sessionId: session.id });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: 'Could not create checkout session' }, { status: 500 });
//   }
// }
