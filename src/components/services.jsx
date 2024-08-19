import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiCalendar, FiClock, FiMap } from "react-icons/fi";

const servicesData = [
  {
    icon: FiMapPin,
    title: 'Find Routes',
    desc: 'Discover the best routes available to your destination with ease using Ticketty.'
  },
  {
    icon: FiCalendar,
    title: 'Book Tickets',
    desc: 'Secure your seat by booking tickets online in just a few clicks.'
  },
  {
    icon: FiClock,
    title: 'Real-time Updates',
    desc: 'Stay informed with real-time updates on bus schedules and delays.'
  },
  {
    icon: FiMap,
    title: 'Explore Destinations',
    desc: 'Explore popular travel destinations and plan your next trip with Ticketty.'
  },
];

export default function Services() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 bg-background"
      id="services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 text-primary">
            Our Services
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {servicesData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                className="group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white p-6 border border-primary overflow-hidden h-full flex flex-col justify-between"
                key={index}
              >
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-primary/10 text-primary rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <Link
                      to=""
                      className="block text-lg sm:text-xl font-semibold mb-3 text-primary hover:text-accent transition-colors duration-300"
                    >
                      {item.title}
                    </Link>
                    <p className="text-text text-sm sm:text-base">{item.desc}</p>
                  </div>
                </div>
                <div className="relative mt-6 pt-6 border-t border-primary/10">
                  <div className="absolute bottom-0 -right-16">
                    <Icon className="w-32 h-32 text-primary opacity-[0.05] group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
