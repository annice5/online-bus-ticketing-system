import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I track the location of my booked bus online?",
      answer: "Yes, you can track your booked bus in real-time through our app or website once you've made a reservation."
    },
    {
      question: "What are the advantages of purchasing a bus ticket with Ticketty?",
      answer: "Purchasing with Ticketty offers convenience, access to exclusive deals, easy comparisons between services, and secure online payments."
    },
    {
      question: "Why book bus tickets online on Ticketty?",
      answer: "Booking online with redBus saves time, offers a wider selection of buses and routes, and often provides better prices and promotions."
    },
    {
      question: "Do I need to create an account on the Ticketty site to book my bus ticket?",
      answer: "Yes. Creating an account helps you manage your bookings, save time on future reservations, and access exclusive deals and discounts."
    },
    {
      question: "Does bus booking online cost me more?",
      answer: "No, online booking through Ticketty doesn't cost more. In fact, you often get access to exclusive online discounts and promotions."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="flex justify-between items-center w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base sm:text-lg font-semibold pr-4">{faq.question}</span>
                {openFAQ === index ? (
                  <MinusIcon className="h-5 w-5 sm:h-6 sm:w-6 text-teal-500 flex-shrink-0" />
                ) : (
                  <PlusIcon className="h-5 w-5 sm:h-6 sm:w-6 text-teal-500 flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;