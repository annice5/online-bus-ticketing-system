

const Overview = () => {
  return (
    <div>
     <div className="flex-1 p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-sm font-medium">Total views</h3>
          <p className="text-lg font-semibold text-green-500">0.43% ↑</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-sm font-medium">Total Profit</h3>
          <p className="text-lg font-semibold text-green-500">4.35% ↑</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-sm font-medium">Total Product</h3>
          <p className="text-lg font-semibold text-green-500">2.59% ↑</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-sm font-medium">Total Users</h3>
          <p className="text-lg font-semibold text-red-500">0.95% ↓</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 col-span-2">
          <h3 className="text-sm font-medium">Total Revenue</h3>
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