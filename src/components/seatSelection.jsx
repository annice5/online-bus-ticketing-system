import React, { useState } from 'react';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats] = useState([3, 8, 11, 18]); // Example booked seats

  const toggleSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= 40; i++) {
      const isBooked = bookedSeats.includes(i);
      const isSelected = selectedSeats.includes(i);

      seats.push(
        <button
          key={i}
          className={`m-1 w-12 h-12 rounded-full border-2 ${
            isBooked
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : isSelected
              ? 'bg-green-500 text-white'
              : 'bg-white text-green-500'
          } border-green-500 hover:bg-green-100 ${
            isBooked ? '' : 'hover:bg-green-500 hover:text-white'
          }`}
          disabled={isBooked}
          onClick={() => toggleSeat(i)}
        >
          {i}
        </button>
      );
    }
    return seats;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-xl font-bold mb-4 mt-32">Seat Selection</h2>
      <div className="mt-8">
        <span className="inline-block w-3 h-3 bg-gray-200 mr-2"></span> Booked
        <span className="inline-block w-3 h-3 bg-green-500 ml-4 mr-2"></span> Selected
        <span className="inline-block w-3 h-3 bg-white ml-4 mr-2 border border-green-500"></span> Available
      </div>
      <div className="flex justify-center flex-wrap mt-10">{renderSeats()}</div>
     
    </div>
  );
};

export default SeatSelection;