import React, { useState, useEffect } from 'react';
import SeatSelection from "../components/seatSelection";
import PaymentInfo from "../components/paymentInfo";
import Footer from "../components/footer";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserNavbar from '../components/userNavbar';


const BookingPage = () => {
  const { busId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bus, setBus] = useState(null);


  useEffect(() => {
    const fetchBus = async () => {
      try {
        const response = await axios.get(`https://ticket-api-vl7w.onrender.com/api/buses/${busId}`);
        setBus(response.data);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };


    fetchBus();
  }, [busId]);


  const handleSeatSelection = (seats) => {
    setSelectedSeats(seats);
  };


  const handlePaymentInfo = (method) => {
    setPaymentMethod(method);
  };


  return (
    <div className="flex flex-col min-h-screen">
       <UserNavbar />
      <div className="flex-grow flex justify-center items-center">
        <div className="App mx-auto p-8 flex flex-col max-w-screen-lg">
          <div className="flex flex-col space-y-6 mt-20">
            <div>
              <h2 className="text-xl font-bold mb-4">Seat Selection</h2>
              <SeatSelection busId={busId} onSeatSelect={handleSeatSelection} selectedSeats={selectedSeats} />
            </div>
            <PaymentInfo onPaymentSelect={handlePaymentInfo} paymentMethod={paymentMethod} style={{ marginTop: '20px' }}/>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};


export default BookingPage;

