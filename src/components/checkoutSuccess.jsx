import React from 'react';
import { Link } from 'react-router-dom';


const CheckoutSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="flex flex-col items-center bg-white text-center">
        <div className="bg-green-100 rounded-full p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-base font-normal text-gray-600 mt-4">
          Your transaction has been completed successfully. We have emailed you details of your order.
        </p>
        {/* <Link
          to="/order"
          className="mt-6 text-blue-500 hover:text-blue-700 transition duration-300"
        >
          Check your order
        </Link> */}
      </div>
    </div>
  );
};


export default CheckoutSuccess;





