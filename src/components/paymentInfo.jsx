import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PayButton from './payButton';


const PaymentInfo = () => {
  const [user, setUser] = useState({ firstName: '', lastName: '' });


  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage
      console.log('User ID:', userId);
      if (!userId) {
        console.error('User ID not found in local storage');
        return;
      }


      try {
        const response = await axios.get(`https://ticket-api-vl7w.onrender.com/api/auth/user/${userId}`);
        const data = response.data;
        console.log(data);
        setUser({ firstName: data.firstName, lastName: data.lastName });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };


    fetchUserData();
  }, []);


  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-orange-700">User Info</h2>
      <p className='font-bold'>{user.firstName} {user.lastName}</p>
      {/* <PayButton /> */}
    </div>
  );
};


export default PaymentInfo;

