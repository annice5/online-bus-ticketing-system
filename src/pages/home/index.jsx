import { TicketIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";




const Home = () => {

    const popularRoutes = [
        { from: 'Accra', to: 'Kumasi' },
        { from: 'Accra', to: 'Takoradi' },
        { from: 'Accra', to: 'Tamale' },
        { from: 'Kumasi', to: 'Tamale' },
        { from: 'Kumasi', to: 'Takoradi' },
      ];


      const offers = [
        { title: 'Christmas Special', description: 'Get 20% off on all routes!', expiryDate: '2024-12-23 -- 2024-12-25 ' },
        { title: 'Student Discount', description: '15% off for students with valid ID.', expiryDate: '2024-09-30' },
        { title: 'Weekend Getaway', description: 'Save 10% on trips booked for weekends.', expiryDate: '2024-08-31' },
      ];

    return (
      <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#FFFFFF] shadow p-4 flex sm:flex justify-between ">
        <div className="text-2xl sm:text-left font-bold ml-8 text-[#C59637] flex" >  Ticketty <TicketIcon className="flex size-5 text-[#34646E] mt-1 "/> </div>
        <nav className="flex sm:flex gap-4 mt-2">
          <a href="/" className="font-semibold" >Home</a>
          
        </nav>
      <div className="flex sm:flex gap-5">
     <Link to = "/login">
     <button className="bg-[#34646E] text-white px-4 py-2 rounded  ">Login</button>
     </Link>

      <Link to = "/signup">
      <button className="bg-[#34646E] text-white px-4 py-2 rounded">Signup</button>
      </Link>

      </div>
      </header>
      
      
      <div className="flex-1 bg-gradient-to-r from-[#C59637] via-[#34646E] to-[#4DBFD3] p-8">
        <div className="bg-cover bg-center h-72 flex items-center justify-center "  >
       <h1 className="text-white text-6xl font-bold font-serif">Book Your Bus Tickets</h1>
        </div>
        
        {/* Search Box */}
        <div className="bg-white p-6 rounded shadow  max-w-4xl mx-auto mb-16 ">
          <h2 className="text-2xl mb-4">Find Your Bus</h2>
          <form className="flex flex-col md:flex-row ">
            <input type="text" placeholder="From" className="p-2 border rounded mb-4 md:mb-0 md:mr-4 flex-1" />
            <input type="text" placeholder="To" className="p-2 border rounded mb-4 md:mb-0 md:mr-4 flex-1" />
            <input type="date" className="p-2 border rounded mb-4 md:mb-0 md:mr-4 flex-1" />
            <button className="bg-[#34646E] text-white px-4 py-2 rounded">Search</button>
          </form>
        </div>
  </div>

    {/* Additional Features */}
   
   <div className="mt-20 ">
          <h2 className="text-3xl mb-10 ml-8 font-semibold">Popular Routes</h2>
          <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 ml-5">
            {popularRoutes.map((route, index) => (
              <button
                key={index}
                className="bg-[#34646E] text-white p-4 w-48 rounded shadow hover:bg-gradient-to-r from-[#C59637] via-[#34646E] to-[#4DBFD3]"
              >
                {route.from} → {route.to}
              </button>
            ))}
        </div>
        </div>
   
  
        <div className="mt-32 pb-60 ml-2 mr-2 rounded-lg ">
          <h2 className="text-3xl mb-10 mt-10 ml-8 font-semibold">Offers and Discounts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-5 mr-5">
            {offers.map((offer, index) => (
              <div key={index} className="bg-[#4DBDD1] p-4  rounded shadow">
                <h3 className="text-2xl text-center font-bold mb-2 mt-5">{offer.title}</h3>
                <p className="mb-2 text-lg  italic ml-8 mt-10">{offer.description}</p>
                <p className="text-sm font-semibold ml-8  text-gray-600">Valid: {offer.expiryDate}</p>
                <button className="bg-[#34646E] text-white shadow-xl  p-4 w-28 rounded-xl ml-28 mt-10">View More</button>
              </div>
            ))}
            </div>
        </div>
  
      <Footer/>
     
    </div>
    )
  }
  
  export default Home