import React, { useState, useEffect } from 'react';
import SeatSelection from "../components/seatSelection";
import PaymentInfo from "../components/paymentInfo";
import Footer from "../components/footer";
import axios from 'axios';
import { useParams } from 'react-router-dom';


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


  const handleBooking = async () => {
    try {
      const response = await axios.post('https://ticket-api-vl7w.onrender.com/users/bookings', {
        bus: busId,
        seats: selectedSeats,
        paymentMethod,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="App">
      <div className="p-8 flex ">
        <div className="">
          
          <div className="flex space-x-6 mt-20 ">
          <div>
          <h2 className="text-xl font-bold mb-4">Seat Selection</h2>
          <SeatSelection busId={busId} onSeatSelect={handleSeatSelection} selectedSeats={selectedSeats} />
          </div>
            <PaymentInfo onPaymentSelect={handlePaymentInfo} paymentMethod={paymentMethod} />
          </div>
         
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};


export default BookingPage;

