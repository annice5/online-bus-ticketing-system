import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { apiSignUp, apiSignUpAdmin, apiCheckUsernameExistsAdmin } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loader from "../components/loader";
import { debounce } from "lodash";
import { useEffect } from "react";

function AdminSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [UsernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const userNameWatch = watch("userName");

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) {
        await checkuserName(userNameWatch);
      }
    }, 1000);
    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [userNameWatch]);

  const checkuserName = async (userName) => {
    setIsUsernameLoading(true);
    try {
      const res = await apiCheckUsernameExistsAdmin(userName);
      console.log("API Response:", res.data);
      console.log(res.data);
      const user = res.data.user;
      if (user) {
        setUsernameNotAvailable(true);
        setUsernameAvailable(false);
      } else {
        setUsernameAvailable(true);
        setUsernameNotAvailable(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsUsernameLoading(false);
    }
  };

 
  

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      password: data.password,
      confirmPassword: data.password,
      companyName: data.companyName,
      contactNumber: data.contactNumber,
      address: data.address,
    };

    try {
      const res = await apiSignUpAdmin(payload);
      console.log(res.data);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("An error occured!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="w-full max-w-md mb-11" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            placeholder="Enter your first name"
            name=""
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none  focus:ring  focus:ring-[#04071F]   "
            {...register("firstName", {
              required: "First Name is required",
            })}
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="last-name"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            placeholder=" Enter your last name"
            className=" shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring  focus:ring-[#04071F]  "
            {...register("lastName", { required: "Lastname is required" })}
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder=" Enter your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring  focus:ring-[#04071F]  "
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="last-name"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring  focus:ring-[#04071F]  "
            {...register("userName", { required: "Username is required" })}
          />
          {errors.userName && (
            <p className="text-red-500">{errors.userName.message}</p>
          )}
          <div className="flex items-center">
            {isUsernameLoading && <Loader />}
            {UsernameAvailable && (
              <p className="text-green-500 ">Username Available</p>
            )}
            {usernameNotAvailable && (
              <p className="text-red-500  ">Username is already taken</p>
            )}
          </div>
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="last-name"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="contactNumber"
            placeholder=" Enter your Phone Number"
            className=" shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring  focus:ring-[#04071F]  "
            {...register("contactNumber", { required: "Phone Number is required" })}
          />
          {errors.contactNumber && (
            <p className="text-red-500">{errors.contactNumber.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="last-name"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            placeholder=" Enter your Company Name"
            className=" shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring  focus:ring-[#04071F]  "
            {...register("companyName", { required: "Company Name is required" })}
          />
          {errors.companyName && (
            <p className="text-red-500">{errors.companyName.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="last-name"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder=" Enter your Address"
            className=" shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring  focus:ring-[#04071F]  "
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>
        <div className="mb-2 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 focus:ring  "
            htmlFor="password"
          >
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder=" Enter Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring  focus:ring-[#04071F]  "
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password length must be more than 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <span
            className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="mt-5 size-3"
            />
          </span>
        </div>
        <div className="mb-2 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            placeholder="Enter confirm Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none  focus:ring  focus:ring-[#04071F]  "
            {...register("confirmPassword", {
              required: "Confirm Password is required",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
          <span
            className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="mt-5 size-3"
            />
          </span>
        </div>
        <button
          type="submit"
          className="bg-[#04071F] text-white font-bold px-4 py-2 rounded w-full mt-2"
        >
          {isSubmitting ? <Loader /> : "Signup as Administrator"}
        
        </button>
        <p className="pb-5 mt-2 text-sm  text-center">
          Already have an account?{" "}
          <a href="/login" className="text-[#04071F]">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

function UserSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [UsernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  
  const userNameWatch = watch("userName");

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) {
        await checkuserName(userNameWatch);
      }
    }, 1000);
    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [userNameWatch]);

  const checkuserName = async (userName) => {
    setIsUsernameLoading(true);
    try {
      const res = await apiCheckUsernameExists(userName);
      console.log(res.data);
      const user = res.data.user;
      if (user) {
        setUsernameNotAvailable(true);
        setUsernameAvailable(false);
      } else {
        setUsernameAvailable(true);
        setUsernameNotAvailable(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsUsernameLoading(false);
    }
  };

  
 
  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      password: data.password,
      confirmPassword: data.password,
    };

    try {
      const res = await apiSignUp(payload);
      console.log(res.data);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("An error occured!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="w-full max-w-md mb-11" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            placeholder="Enter your first name"
            name=""
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none  focus:ring  focus:ring-[#04071F]  "
            {...register("firstName", {
              required: "First Name is required",
            })}
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="last-name"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            placeholder=" Enter your last name"
            className=" shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring  focus:ring-[#04071F]  "
            {...register("lastName", { required: "Lastname is required" })}
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder=" Enter your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring  focus:ring-[#04071F]  "
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="last-name"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring  focus:ring-[#04071F]  "
            {...register("userName", { required: "Username is required" })}
          />
          {errors.userName && (
            <p className="text-red-500">{errors.userName.message}</p>
          )}
          <div className="flex items-center">
            {isUsernameLoading && <Loader/>}
            {UsernameAvailable && (
              <p className="text-green-500">Username Available</p>
            )}
            {usernameNotAvailable && (
              <p className="text-red-500">Username is already taken</p>
            )}
          </div>
        </div>
        <div className="mb-2 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 focus:ring  "
            htmlFor="password"
          >
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder=" Enter Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring  focus:ring-[#04071F]  "
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password length must be more than 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <span
            className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="mt-5 size-3"
            />
          </span>
        </div>
        <div className="mb-2 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            placeholder="Enter confirm Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none  focus:ring  focus:ring-[#04071F]  "
            {...register("confirmPassword", {
              required: "Confirm Password is required",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
          <span
            className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="mt-5 size-3"
            />
          </span>
        </div>

        <button
          type="submit"
          className="bg-[#04071F] text-white font-bold mt-2 px-4 py-2 rounded w-full"
        >
          {isSubmitting ? <Loader /> : "Signup as User"}
        </button>
        <p className=" text-sm  text-center mt-2">
          Already have an account?{" "}
          <a href="/login" className="text-[#34646E]">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

function SignupPage() {
  const [role, setRole] = useState("User"); // Default role is User

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 mt-8 mb-6 pb-1">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
            Select Role
          </label>
          <div className="flex justify-center">
            <input
              type="radio"
              id="userRole"
              name="role"
              value="User"
              checked={role === "User"}
              onChange={(e) => setRole(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="userRole" className="mr-4 text-gray-700">
              User
            </label>
            <input
              type="radio"
              id="adminRole"
              name="role"
              value="Admin"
              checked={role === "Admin"}
              onChange={(e) => setRole(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="adminRole" className="text-gray-700">
              Administrator
            </label>
          </div>
        </div>
        {role === "Admin" ? <AdminSignupForm /> : <UserSignupForm />}
      </div>
    </div>
  );
}

export default SignupPage;
