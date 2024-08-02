import loginVideo from "../assets/videos/loginVideo.mp4";

const Login = () => {
  return (
    
    <div className="flex min-h-screen bg-gray-100">

  {/* Right side - Image or Animation */}
  <div className="hidden md:block md:w-1/2 bg-cover bg-center" >
   <video
   autoPlay
   loop
   muted
   className=" flex-1 h-full bg-[#34646E] border-none  "
    >
   <source src={loginVideo} type="video/mp4" />
 </video>
    </div>


    {/* Left side - Form */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
      <h2 className="text-3xl font-bold mb-6">Welcome Back!!</h2>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
             className="w-full p-3 border border-gray-300 rounded focus:outline-none  focus:ring  focus:ring-[#34646E]   "
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none  focus:ring  focus:ring-[#34646E]   "
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#34646E] text-white px-4 py-2 rounded "
            type="button"
          >
            Login
          </button>
          <a
            className="text-[#34646E] hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>

  
  </div>
  )
}

export default Login