import { TicketIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import { useState } from 'react';
import axios from 'axios';
import Services from "../../components/services";
import Client from "../../components/reviews";
import GetInTouch from "../../components/contactUs";
import FAQ from "../../components/faq";

const Home = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [busInfo, setBusInfo] = useState(null);
  const [noBusFound, setNoBusFound] = useState(false);

  const handleSearch = async () => {
    try {
      const filter = JSON.stringify({ departureCity: fromCity, arrivalCity: toCity, date });
      const response = await axios.get('http://localhost:2900/api/buses/search', {
        params: { filter },
      });

      if (response.data.length > 0) {
        setBusInfo(response.data[0]); // Display the first bus found
        setNoBusFound(false);
      } else {
        setBusInfo(null);
        setNoBusFound(true);
        setTimeout(() => setNoBusFound(false), 3000); // Hide message after 3 seconds
      }
    } catch (error) {
      console.error("Error fetching bus data:", error);
      setBusInfo(null);
      setNoBusFound(true);
      setTimeout(() => setNoBusFound(false), 3000); // Hide message after 3 seconds
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#04071F] flex items-center">
            Ticketty <TicketIcon className="h-6 w-6 text-complementary ml-1" />
          </div>
          <div className="flex gap-4">
            <Link to="/login">
              <button className="bg-[#04071F] text-white px-4 py-2 rounded hover:bg-[#1a1f3d] transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-[#04071F] text-white px-4 py-2 rounded hover:bg-[#1a1f3d] transition duration-300">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-custom-gradient py-48 px-6 lg:px-24 text-center lg:text-left">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            Where are you traveling <span className="text-complementary">to?</span>
          </h1>
          <p className="text-base md:text-lg lg:text-lg text-black">
            Buy your tickets online with Ticketty.
          </p>

          <div className="bg-white shadow-md rounded-lg p-6 mt-8 flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            <input
              type="text"
              placeholder="Traveling from"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className="w-full lg:w-1/3 p-3 border rounded-md text-gray-600 focus:ring-2 focus:ring-red-600"
            />

            <input
              type="text"
              placeholder="Traveling to"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="w-full lg:w-1/3 p-3 border rounded-md text-gray-600 focus:ring-2 focus:ring-red-600"
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full lg:w-1/3 p-3 border rounded-md text-gray-600 focus:ring-2 focus:ring-red-600"
            />

            <button
              onClick={handleSearch}
              className="w-full lg:w-auto bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-accent transition duration-300"
            >
              Search
            </button>
          </div>

          {busInfo && (
            <div className="bg-white shadow-lg rounded-lg p-4 mt-4 flex items-center justify-between space-x-4">
              <img 
                src={`https://savefiles.org/${busInfo.busLogo}?shareable_link=341`} 
                alt="Bus Logo" 
                className="h-12 w-12 object-cover" 
              />
              <div>
                <h2 className="text-lg font-bold text-gray-800">{busInfo.busOperator}</h2>
                <p className="text-sm text-gray-600">Departure Time: {busInfo.departureTime}</p>
              </div>
              <Link to="/login" className="text-primary font-bold">Login</Link>
            </div>
          )}

          {noBusFound && (
            <div className="text-red-600 font-bold mt-4">
              No buses found
            </div>
          )}
        </div>
      </section>

      <Services />
      <Client />
      <FAQ />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
