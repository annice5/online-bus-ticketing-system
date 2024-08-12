import SeatSelection from "../components/seatSelection";
import PaymentInfo from "../components/paymentInfo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const BookingPage = () => {
  return (
    <div className="App">
    <div className="p-8 flex ">
      <div className="">
          <Navbar/>
        <div className="flex space-x-6 mt-40 ">
          <SeatSelection  />
          <PaymentInfo />
        </div>
       
      </div>
    </div>
   <div className="mt-24">
   <Footer />
   </div>
  </div>
);
}
  


export default BookingPage