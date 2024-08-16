import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdChair } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";
import { FaCediSign } from "react-icons/fa6";
import PayButton from './payButton'; // Import PayButton component


const Seat = ({ seatNumber, isSelected, isBooked, onClick }) => {
  const getColorClass = () => {
    if (isBooked) return "text-purple-950"; // Booked seat color
    if (isSelected) return "text-red-600"; // Selected seat color
    return "text-neutral-600"; // Available seat color
  };


  return (
    <MdChair
      className={`text-3xl -rotate-90 cursor-pointer ${getColorClass()}`}
      onClick={isBooked ? undefined : onClick} // Disable click for booked seats
    />
  );
};


const BusSeatLayout = ({ busId }) => {
  const [seats, setSeats] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);


  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await axios.get(`https://ticket-api-vl7w.onrender.com/api/buses/${busId}`);
        const { seats, ticketPrice } = response.data;
        setSeats(seats || []);
        setTicketPrice(parseFloat(ticketPrice.replace(" GHS", "")) || 0); // Ensure the price is a number
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };


    fetchBusData();
  }, [busId]);


  const handleSeatClick = (seat) => {
    if (seat.isBooked) return; // Prevent selection of booked seats


    if (selectedSeats.includes(seat.number)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat.number));
    } else {
      if (selectedSeats.length < 10) {
        setSelectedSeats([...selectedSeats, seat.number]);
      } else {
        alert("You can only select a maximum of 10 seats");
      }
    }
  };


  const renderedSeats = () => {
    return seats.map((seat, index) => {
      const isSelected = selectedSeats.includes(seat.number);
      return (
        <Seat
          key={index}
          seatNumber={seat.number}
          isSelected={isSelected}
          isBooked={seat.isBooked}
          onClick={() => handleSeatClick(seat)}
        />
      );
    });
  };


  const totalAmount = selectedSeats.length * ticketPrice;


  return (
    <div className='space-y-5'>
      <h2 className='text-xl text-neutral-800'>
        Choose a Seat
      </h2>


      {/* Seat Layout */}
      <div className='w-full flex justify-between'>
        <div className='flex-1 w-full flex items-start'>
          <div className='w-10 h-full border-r-2 border-neutral-300'>
            <GiSteeringWheel className="text-3xl mt-6 text-emerald-950 -rotate-50" />
          </div>
          <div className='flex flex-wrap w-full'>
            {renderedSeats().map((seat, index) => (
              <div key={index} className='w-[10%] p-0.1'>
                {seat}
              </div>
            ))}
          </div>
        </div>


        {/* Information */}
        <div className='space-y-3 w-28'>
          <div className='flex items-center gap-x-2'>
            <MdChair className='text-3xl text-gray-700 -rotate-90' />
            <p className='text-neutral-900 text-sm font-normal'>Available</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <MdChair className='text-3xl text-purple-950 -rotate-90' />
            <p className='text-neutral-900 text-sm font-normal'>Booked</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <MdChair className='text-3xl text-red-500 -rotate-90' />
            <p className='text-neutral-900 text-sm font-normal'>Selected</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <FaCediSign className='text-3xl text-gray-700 ' />
            <p className='text-neutral-900 text-sm font-normal'>{ticketPrice}</p>
          </div>
        </div>
      </div>


      {/* Selected Seats */}
      {selectedSeats.length > 0 && (
        <div className='!mt-10'>
          <h3 className='text-lg font-bold'>
            Selected Seats
          </h3>
          <div className='flex flex-wrap'>
            {selectedSeats.map(seat => (
              <div key={seat} className='w-10 h-10 rounded-md m-1.5 text-lg font-medium bg-red-500/30 flex items-center justify-center '>{seat}</div>
            ))}
          </div>
        </div>
      )}


      {/* Calculate price */}
      {selectedSeats.length > 0 && (
        <div className='!mt-5 flex items-center gap-x-4'>
          <h3 className='text-lg font-bold'>
            Total Fair Prices:
          </h3>
          <p className='text-lg font-medium'>
            GHS. {totalAmount}
          </p>
          <span className='text-sm text-neutral-400'></span>
        </div>
      )}


      {/* Pay Button */}
      {selectedSeats.length > 0 && (
        <PayButton seats={selectedSeats} totalAmount={totalAmount} />
      )}
    </div>
  );
};


export default BusSeatLayout;





