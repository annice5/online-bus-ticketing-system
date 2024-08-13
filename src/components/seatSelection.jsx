import axios from 'axios';
import { useState, useEffect } from 'react';


const SeatSelection = ({ busId, onSeatSelect, selectedSeats }) => {
  const [seats, setSeats] = useState([]);


  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await axios.get(`https://ticket-api-vl7w.onrender.com/api/buses/${busId}/seats`);
        setSeats(response.data.seats || []);
      } catch (error) {
        console.error('Error fetching seat data:', error);
      }
    };


    fetchSeats();
  }, [busId]);


  const toggleSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      onSeatSelect(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      onSeatSelect([...selectedSeats, seatNumber]);
    }
  };


  const renderSeats = () => {
    const totalSeats = seats.length;
    const renderedSeats = [];
    for (let i = 1; i <= totalSeats; i++) {
      const isBooked = seats.includes(i);
      const isSelected = selectedSeats.includes(i);


      renderedSeats.push(
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
    return renderedSeats;
  };


  return (
    <div className="seat-container">
      {renderSeats()}
    </div>
  );
};


export default SeatSelection;

