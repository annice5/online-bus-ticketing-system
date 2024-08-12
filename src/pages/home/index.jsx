import { TicketIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import heroImageTwo from "../../assets/images/heroImageTwo.jpg";
import sectionImage from "../../assets/images/sectionImage.jpg";

const Home = () => {
  const offers = [
    {
      title: "Christmas Special",
      description: "Get 20% off on all routes!",
      expiryDate: "2024-12-23 -- 2024-12-25 ",
    },
    {
      title: "Student Discount",
      description: "15% off for students with valid ID.",
      expiryDate: "2024-09-30",
    },
    {
      title: "Weekend Getaway",
      description: "Save 10% on trips booked for weekends.",
      expiryDate: "2024-08-31",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl  font-bold  text-[#04071F] flex">
            {" "}
            Ticketty <TicketIcon className=" size-5 text-[#B91C1C] mt-1 " />{" "}
          </div>

          <div className="flex gap-4">
            <Link to="/login">
              <button className="bg-[#04071F] text-white px-4 py-2 rounded  ">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="bg-[#04071F] text-white px-4 py-2 rounded">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-[#04071F] py-48 px-6 lg:px-24 text-center lg:text-left">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Heading */}
          <h1 className="text-6xl md:text-5xl font-bold text-white">
            Where are you traveling <span className="text-red-600">to?</span>
          </h1>
          {/* Subheading */}
          <p className="text-lg text-gray-400">
            Buy your tickets online with Ticketty.
          </p>

          {/* Form Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-8 flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0 ">
            <select className="w-full lg:w-1/3 p-3 border  rounded-md text-gray-600 focus:ring-2 focus:ring-red-600">
              <option>Traveling from</option>
              <option>Accra</option>
              <option>Kumasi</option>
              <option>Takoradi</option>
            </select>

            <select className="w-full lg:w-1/3 p-3 border rounded-md text-gray-600 focus:ring-2 focus:ring-red-600">
              <option>Traveling to</option>
              <option>Accra</option>
              <option>Kumasi</option>
              <option>Takoradi</option>
            </select>

            <input
              type="date"
              className="w-full lg:w-1/3 p-3 border rounded-md text-gray-600 focus:ring-2 focus:ring-red-600"
            />

            <button className="w-full lg:w-auto bg-red-600 text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition duration-300">
              Search
            </button>
          </div>
        </div>
      </section>
      {/* Additional Features */}

      <div className="mt-20 ">
        <section className="bg-gray-50 flex flex-col-reverse lg:flex-row items-center justify-between p-6 lg:p-12">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 space-y-4">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
              Schedule & Enjoy your Trip
            </h1>
            <p className="text-gray-600">
              Book your Bus ticket online and avoid the stress of queueing at
              the terminals.
            </p>
            <p className="text-gray-600">
              Get tickets to any part of Ghana at the comfort of your home.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={sectionImage} // Replace with actual image link
              alt="VIP Bus"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </section>
      </div>

      <div className="mt-32 pb-60 ml-2 mr-2 rounded-lg ">
        <h1 className="text-3xl lg:text-5xl text-gray-800 mb-10 mt-10 ml-8 font-bold">
          Offers and Discounts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-5 mr-5">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg w-full h-auto bg-slate-200 pb-20 "
            >
              <h3 className="text-2xl text-center font-bold mb-2 mt-5 text-gray-800">
                {offer.title}
              </h3>
              <p className="mb-2 text-lg  italic ml-8 mt-10 text-gray-800">
                {offer.description}
              </p>
              <p className="text-sm font-semibold ml-8  text-gray-600">
                Valid: {offer.expiryDate}
              </p>
              <div className="ml-40 mt-6"></div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
