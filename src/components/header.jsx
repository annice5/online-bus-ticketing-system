const Header = () => {
    return (
      <header className="flex items-center justify-between bg-white p-4 shadow-md w-full">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Type to search..."
            className="px-4 py-2 border rounded-md"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <span className="sr-only">Notifications</span>
            <span className="bg-red-500 rounded-full w-3 h-3 absolute top-0 right-0"></span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-2.21-1.79-4-4-4S10 8.79 10 11v3.159c0 .538-.214 1.055-.595 1.437L8 17h5m2 0v2a2 2 0 11-4 0v-2m4 0H9"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <img
              className="w-8 h-8 rounded-full"
              src="https://via.placeholder.com/150"
              alt="User Avatar"
            />
            <div>
              <p className="text-sm font-medium">Thomas Anree</p>
              <p className="text-xs text-gray-500">UX Designer</p>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;