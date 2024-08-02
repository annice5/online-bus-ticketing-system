 import signupVideoTwo from "../assets/videos/signupVideoTwo.mp4"

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
    {/* Left Side: Signup Form */}

    <div className="flex-1 bg-gray-200 flex items-center justify-center">
    <video
          autoPlay
          loop
          muted
          className=" flex-1 h-full bg-[#34646E] border-none  "
        >
          <source src={signupVideoTwo} type="video/mp4" />
        </video>
    </div>

 <div className="flex-1 bg-white p-8 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">Create an Account</h1>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            placeholder="Enter your first name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none  focus:ring  focus:ring-[#34646E]   "
            
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            placeholder=" Enter your last name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring  focus:ring-[#34646E]  "
            required
          />
        </div>
      
       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring  focus:ring-[#34646E]  "
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 focus:ring  " htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder=" Enter Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring  focus:ring-[#34646E]  "
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Enter confirm Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none  focus:ring  focus:ring-[#34646E]  "
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#34646E] text-white px-4 py-2 rounded "
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account? <a href="/login" className="text-[#34646E]">Log in</a>
      </p>
    </div>

    {/* Right Side: Image or Animation */}
   
  </div>
  )
}

export default Signup

