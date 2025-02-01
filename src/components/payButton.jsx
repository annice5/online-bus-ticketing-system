import React, { useState } from "react";
import axios from "axios";
import Spinner from "./spinner";
import { useParams } from "react-router-dom";

const PayButton = ({ seats, totalAmount }) => {
  const { busId } = useParams();
  const [loading, setLoading] = useState(false);

  const initializePayment = async () => {
    setLoading(true);
    try {
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("accessToken"); // Retrieve the token

      if (!email || !token) {
        throw new Error("User email or token not found in localStorage");
      }

      const response = await axios.post(
        "https://ticket-api-vl7w.onrender.com/api/paystack/create-checkout-session",
        {
          seats: seats,
          amount: totalAmount,
          email: email,
          busId: busId, // Include busId in the payload
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in headers
          },
        }
      );

      const { authorizationUrl } = response.data;

      const paymentWindow = window.open(authorizationUrl);

      // if (paymentWindow) {
      // //   toast.success("Payment Successful");
      // // setTimeout(() => { navigate("/checkout-success") }, 5000);
      //   const interval = setInterval(() => {

      //     if (paymentWindow.closed) {
      //       window.location.href = '/checkout-success';
      //       clearInterval(interval);
      //     }
      //   }, 1000);
      // }
    } catch (error) {
      console.error("Error initializing payment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={initializePayment}
      disabled={loading}
      className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary"
    >
      {loading ? <Spinner /> : "Pay Now"}
    </button>
  );
};

export default PayButton;
