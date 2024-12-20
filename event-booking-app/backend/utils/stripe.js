import Stripe from 'stripe';
import dotenv from "dotenv";
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount:amount*100,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });
    return  paymentIntent
    // return paymentIntent;
  } catch (error) {
    throw new Error('Error creating payment intent:', error.message);
  }
};

export default createPaymentIntent;