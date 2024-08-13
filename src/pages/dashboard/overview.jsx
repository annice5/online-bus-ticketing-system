// import ApexChart from "../../components/profitChart"

import ProfitChart from "../../components/profitChart"


const Overview = () => {
  return (
    <div>
     <div className="flex-1 mt-24 ml-5 mr-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 ">
        
        <div className="bg-gray-100 shadow-xl rounded-lg p-4 pb-20 ">
          <h3 className="text-sm font-medium">Total Buses</h3>
          <p className="text-lg font-semibold text-green-500">50% </p>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-4">
          <h3 className="text-sm font-medium">Total Bookings</h3>
          <p className="text-lg font-semibold text-green-500">60% </p>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-4">
          <h3 className="text-sm font-medium">Total Users</h3>
          <p className="text-lg font-semibold text-green-500">30% </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 col-span-2">
          <h3 className="text-sm font-medium">Total Buses Active for the Month</h3>
          <ProfitChart/>
          {/* Add Chart Component here */}
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-sm font-medium">Profit this week</h3>
         
          {/* Add Small Chart Component here */}
        </div>
      </div>
    </div> 
    </div>
  )
}

export default Overview