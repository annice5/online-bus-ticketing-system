import React from "react";
import contact from '../assets/icons/email.svg';

const GetInTouch = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-slate-50" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4">Get in touch</h3>
          
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 flex items-center">
            <img 
              src={contact} 
              alt="Contact" 
              className="w-full h-auto max-h-[500px] object-contain" // Ensure SVG scales dynamically
            />
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <form>
                <div className="grid gap-4 sm:gap-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-semibold text-sm mb-1">Your Name:</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 bg-slate-50 rounded border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-semibold text-sm mb-1">Your Email:</label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 bg-slate-50 rounded border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block font-semibold text-sm mb-1">Your Question:</label>
                    <input
                      name="subject"
                      id="subject"
                      className="w-full px-3 py-2 bg-slate-50 rounded border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="comments" className="block font-semibold text-sm mb-1">Your Comment:</label>
                    <textarea
                      name="comments"
                      id="comments"
                      className="w-full px-3 py-2 h-32 bg-slate-50 rounded border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
