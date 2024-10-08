import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarDateRangeIcon } from '@heroicons/react/24/solid';
import RoutesTable from '../components/routesTable';
import Footer from '../components/footer';
import UserNavbar from '../components/userNavbar';




const UserPage = () => {


    const [selectedDate, setSelectedDate] = useState(new Date());


  return (
   <div>


    <UserNavbar />
     
      <div className="mt-32 px-4 ml-11">
    <h1 className="text-4xl font-bold text-gray-800 flex justify-center items-center ">Available Routes</h1>
    <p className="text-gray-500 mt-2 flex justify-center items-center">Browse available routes</p>
  </div>
     <div className="mt-8 px-20 ml-[930px] ">
     <label htmlFor="departure-date" className="block text-gray-700 font-medium mb-2">
       Bus Departure Date
     </label>
    <div className='relative'>
    <DatePicker
       id="departure-date"
       selected={selectedDate}
       onChange={(date) => setSelectedDate(date)}
       className="border border-gray-300 rounded-md p-2"
     />
     <CalendarDateRangeIcon className=' size-5 absolute ml-40 top-3'/>
    </div>
     
   </div>
   <div className='min-h-full mt-15 ml-8 mr-8 '>
   <RoutesTable/>
   </div>


   <div>
   <Footer/>
   </div>
   </div>
  )
}


export default UserPage

