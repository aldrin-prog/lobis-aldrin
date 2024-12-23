import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEvent } from "../context/AppContext";

const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { createPaymentIntent,booked, event, loginUser, updateBookingPaymentStatus } = useEvent();
    const [clientSecret, setClientSecret] = useState("");

    const [message, setMessage] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!stripe || !elements) return;

            setIsProcessing(true);
            const response = await createPaymentIntent(event.bookingId);
            // console.log(response)
            // setClientSecret();
            const { error, paymentIntent } = await stripe.confirmCardPayment(
                response.paymentIntent.client_secret,
                {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: { name: `${loginUser.firstName} ${loginUser.lastName}` },
                    },
                }
            );

            if (error) {
                setMessage(`Payment failed: ${error.message}`);
            } else if (paymentIntent.status === "succeeded") {
                const updatedStatus = await updateBookingPaymentStatus(booked._id);
                setMessage("Payment successful!");
            }
            
            setIsProcessing(false);
        } catch (error) {

        }
    };

    return (
        <>
            <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Process Payment</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-transparent shadow-none">
                    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
                        <CardElement className="border p-4 rounded-md" />
                        <button
                            type="submit"
                            disabled={!stripe || isProcessing}
                            className="btn btn-primary mt-4 "
                        >
                            {isProcessing ? "Processing..." : "Pay"}
                        </button>
                        {message && <p className="mt-2 text-red-500">{message}</p>}
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>

    );
};

export default Payment;
