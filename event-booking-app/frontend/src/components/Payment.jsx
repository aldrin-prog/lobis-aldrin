import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { name: "Customer Name" },
        },
      }
    );

    if (error) {
      setMessage(`Payment failed: ${error.message}`);
    } else if (paymentIntent.status === "succeeded") {
      setMessage("Payment successful!");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <CardElement className="border p-4 rounded-md" />
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="btn btn-primary mt-4"
      >
        {isProcessing ? "Processing..." : "Pay"}
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </form>
  );
};

export default Payment;
