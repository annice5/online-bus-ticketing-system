

const Routes = () => {
 
  const routesData = [
    { from: "Accra", to: "Wenchi", type: "Scheduled", schedule: "Friday 08:30 pm", price: "¢180.00" },
    { from: "Accra", to: "Sampa", type: "Scheduled", schedule: "Friday 07:00 pm", price: "¢190.00" },
    { from: "Yendi", to: "Accra", type: "Scheduled", schedule: "Friday 03:00 pm", price: "¢315.00" },
    { from: "Bawku", to: "Accra", type: "Scheduled", schedule: "Friday 12:00 pm", price: "¢360.00" },
    { from: "Bolga", to: "Accra", type: "Scheduled", schedule: "Friday 10:00 am", price: "¢210.00" },
    // Add more route data as needed
  ];
  


  return (
 <div>

<div className="container mx-auto p-4 bg-gradient-to-r from-[#C59637] via-[#34646E] to-[#4DBFD3] ">
      <h1 className="text-4xl font-bold mb-2 mt-5 mr-10 text-[#34646E]">Available Routes</h1>
      
      <div className="ml-[800px] mb-8">
        <label htmlFor="departureDate" className="mr-4 font-semibold  text-black">Bus Departure Date</label>
        <input 
          type="date" 
          id="departureDate" 
          className="border border-gray-300 p-2 rounded"
        />
      </div>
    </div>

    <table className="min-w-full bg-white  mt-10 ml-2 mr-2">
      <thead className="bg-gray-200 border border-gray-700">
        <tr>
          <th className="py-2 px-4 border  text-left">Traveling From</th>
          <th className="py-2 px-4 border  text-left">Traveling To</th>
          <th className="py-2 px-4 border  text-left">Trip Type</th>
          <th className="py-2 px-4 border  text-left">Schedule</th>
          <th className="py-2 px-4 border  text-left">Price</th>
          <th className="py-2 px-4 border  text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {routesData.map((route, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border border-gray-300">{route.from}</td>
            <td className="py-2 px-4 border border-gray-300">{route.to}</td>
            <td className="py-2 px-4 border border-gray-300">{route.type}</td>
            <td className="py-2 px-4 border border-gray-300">{route.schedule}</td>
            <td className="py-2 px-4 border border-gray-300">{route.price}</td>
            <td className="py-2 px-2 border border-gray-300">
              <button className="bg-[#34646E] text-white py-1 px-3 rounded hover:bg-gradient-to-r from-[#C59637] via-[#34646E] to-[#4DBFD3]">Book Ticket</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Routes