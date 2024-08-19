import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import client images
import client1 from '../assets/images/review1.jpeg';
import client2 from '../assets/images/review2.jpeg';
import client3 from '../assets/images/review3.jpg';
import client4 from '../assets/images/review4.jpg';
import client5 from '../assets/images/review5.jpg';
import client6 from '../assets/images/review6.jpg';

// Full client data array
const clientData = [
  {
    image: client1,
    name: 'Kwame Osei',
    title: 'Frequent Traveler',
    desc: '" Booking my tickets through this platform has been seamless and stress-free."'
  },
  {
    image: client2,
    name: 'Akua Mensah',
    title: 'Tourist',
    desc: '" I was able to find the best deals on bus tickets. The user interface is clean, and the booking process is quick."'
  },
  {
    image: client3,
    name: 'Kojo Adjei',
    title: 'Business Traveler',
    desc: '" The convenience of booking and the variety of options available make this my go-to site for travel."'
  },
  {
    image: client4,
    name: 'Ama Asante',
    title: 'Student',
    desc: '" The discounts offered to students are fantastic. I saved a lot on my trips back home during holidays."'
  },
  {
    image: client5,
    name: 'Yaw Boateng',
    title: 'Occasional Traveler',
    desc: " I don't travel often, but when I do, I always use this site. It's reliable and easy to use."
  },
  {
    image: client6,
    name: 'Esi Amankwah',
    title: 'Family Traveler',
    desc: '" Traveling with family is easier now that I can book seats together. Great service and support!"'
  },
];

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="relative md:py-24 py-16 bg-background" id="review">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-normal mb-4 text-primary border-b-2 border-primary inline-block pb-2">What Our Users Say</h3>
          <p className="text-text max-w-xl mx-auto text-sm sm:text-base">Explore the experiences of our users and see why they love using our platform for their travel needs.</p>
        </div>

        <Slider {...settings} className="testimonial-slider">
          {clientData.map((item, index) => (
            <div key={index} className="px-3 py-5">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                <div className="p-6">
                  <div className="relative mb-6">
                    <i className="mdi mdi-format-quote-open mdi-48px text-accent opacity-50 absolute top-0 left-0"></i>
                    <p className="text-text text-sm sm:text-base relative z-10 mt-8">{item.desc}</p>
                  </div>
                  <div className="flex items-center">
                    <img src={item.image} className="w-12 h-12 rounded-full mr-4" alt={item.name} />
                    <div>
                      <h6 className="font-semibold text-sm sm:text-base text-primary">{item.name}</h6>
                      <span className="text-primary text-xs sm:text-sm">{item.title}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-accent/20 px-6 py-4 border-t border-primary">
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="mdi mdi-star text-accent mx-0.5"></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Client;
