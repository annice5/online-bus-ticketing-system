import  { useState } from "react";

const SidebarToggle = () => {
   
const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
         <div className="flex h-screen bg-gray-100">
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-gray-800 h-full text-white transition-width duration-300`}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className={`text-lg font-bold ${isOpen ? "block" : "hidden"}`}>
            Dashboard
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-2 mt-4">
          <a
            href="#home"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
          >
            <span className="material-icons">{isOpen ? "🏠" : "🏠"}</span>
            <span className={isOpen ? "block" : "hidden"}>Home</span>
          </a>
          <a
            href="#services"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
          >
            <span className="material-icons">{isOpen ? "🛠️" : "🛠️"}</span>
            <span className={isOpen ? "block" : "hidden"}>Services</span>
          </a>
          <a
            href="#contact"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
          >
            <span className="material-icons">{isOpen ? "📞" : "📞"}</span>
            <span className={isOpen ? "block" : "hidden"}>Contact</span>
          </a>
          <a
            href="#about"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
          >
            <span className="material-icons">{isOpen ? "ℹ️" : "ℹ️"}</span>
            <span className={isOpen ? "block" : "hidden"}>About</span>
          </a>
        </nav>
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p>Your main content goes here...</p>
      </div>
    </div>
    </div>
  )
}

export default SidebarToggle
