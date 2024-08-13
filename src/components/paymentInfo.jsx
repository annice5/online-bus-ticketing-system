
const PaymentInfo = () => {
    return (
      <div className="bg-slate-100 p-20 rounded-lg shadow-lg  ">
        <h2 className="text-xl font-bold mb-4">Payment Info</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mobile Money Channel
            </label>
            <select className="block w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Select mobile money channel</option>
              <option>MTN</option>
              <option>Vodafone</option>
              <option>AirtelTigo</option>
              {/* Add more channels as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mobile Money Number
            </label>
            <input
              type="text"
              className="block w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Enter mobile money number"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              </label>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Book Ticket
          </button>
        </form>
      </div>
    );
  };
  
  export default PaymentInfo;