import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdChair } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";
import { FaCediSign } from "react-icons/fa6";
import PayButton from './payButton';

const Seat = ({ seatNumber, isSelected, isBooked, onClick }) => {
  const getColorClass = () => {
    if (isBooked) return "text-complementary";
    if (isSelected) return "text-accent";
    return "text-dark-secondary"; // Updated class for better visibility
  };

  return (
    <MdChair
      className={`text-2xl sm:text-3xl -rotate-90 cursor-pointer ${getColorClass()}`}
      onClick={isBooked ? undefined : onClick}
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
        setTicketPrice(parseFloat(ticketPrice.replace(/[^0-9.]/g, "")) || 0);

      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchBusData();
  }, [busId]);

  const handleSeatClick = (seat) => {
    if (seat.isBooked) return;

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
    <div className='space-y-5 p-4 sm:p-6 lg:p-8'>
      <h2 className='text-xl sm:text-2xl text-neutral-800 font-semibold'>
        Choose a Seat
      </h2>

      <div className='w-full flex flex-col sm:flex-row justify-between'>
        <div className='flex-1 w-full flex items-start mb-4 sm:mb-0'>
          <div className='w-8 sm:w-10 h-full border-r-2 border-neutral-300'>
            <GiSteeringWheel className="text-2xl sm:text-3xl mt-6 text-primary -rotate-50" />
          </div>
          <div className='flex flex-wrap w-full'>
            {renderedSeats().map((seat, index) => (
              <div key={index} className='w-[10%] p-0.5 sm:p-1'>
                {seat}
              </div>
            ))}
          </div>
        </div>

        <div className='flex sm:flex-col justify-between sm:justify-start sm:space-y-3 w-full sm:w-28 mt-4 sm:mt-0'>
          <div className='flex items-center gap-x-2'>
            <MdChair className='text-2xl sm:text-3xl text-dark-secondary -rotate-90' />
            <p className='text-neutral-900 text-xs sm:text-sm font-normal'>Available</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <MdChair className='text-2xl sm:text-3xl text-complementary -rotate-90' />
            <p className='text-neutral-900 text-xs sm:text-sm font-normal'>Booked</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <MdChair className='text-2xl sm:text-3xl text-accent -rotate-90' />
            <p className='text-neutral-900 text-xs sm:text-sm font-normal'>Selected</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <FaCediSign className='text-2xl sm:text-3xl text-secondary' />
            <p className='text-neutral-900 text-xs sm:text-sm font-normal'>{ticketPrice}</p>
          </div>
        </div>
      </div>

      {selectedSeats.length > 0 && (
        <div className='mt-6 sm:mt-10'>
          <h3 className='text-lg sm:text-xl font-bold mb-2'>
            Selected Seats
          </h3>
          <div className='flex flex-wrap'>
            {selectedSeats.map(seat => (
              <div key={seat} className='w-8 h-8 sm:w-10 sm:h-10 rounded-md m-1 sm:m-1.5 text-sm sm:text-lg font-medium bg-accent/30 flex items-center justify-center'>{seat}</div>
            ))}
          </div>
        </div>
      )}

      {selectedSeats.length > 0 && (
        <div className='mt-4 sm:mt-6 flex flex-wrap items-center gap-x-4'>
          <h3 className='text-lg sm:text-xl font-bold'>
            Total Fair Prices:
          </h3>
          <p className='text-lg sm:text-xl font-medium'>
            GHS. {totalAmount}
          </p>
        </div>
      )}

      {selectedSeats.length > 0 && (
        <div className='mt-4 sm:mt-6'>
          <PayButton seats={selectedSeats} totalAmount={totalAmount} />
        </div>
      )}
    </div>
  );
};

export default BusSeatLayout;
