import { useState } from "react";
import Loader from "../components/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { apiLogIn, apiLogInAdmin } from "../services/auth";
import ReCAPTCHA from "react-google-recaptcha";

function AdminLoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaToken(value);
  };

  const addToLocalStorage = (accessToken, user) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("userName", user.userName);
    localStorage.setItem("userId", user.id || user.userId || user._id);
  };

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiLogInAdmin({
        email: data.email,
        password: data.password,
        recaptchaToken: recaptchaToken,
      });
      console.log("Response: ", res.data);

      addToLocalStorage(res.data.accessToken, res.data.user);
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
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
        <ReCAPTCHA
          sitekey="6LeJ1SsqAAAAAG6QZYggRff2GtBtvq7mDS3-pxZy"
          onChange={handleRecaptchaChange}
        />
        <button
          type="submit"
          className="bg-[#04071F] text-white font-bold px-4 py-2 rounded w-full mt-2"
        >
          {isSubmitting ? <Loader /> : "Login as Adminisrator"}
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-2 pb-3">
        Forgot{" "}
        <a href="/login" className="text-gray-600 hover:underline  ">
          Password?
        </a>
      </p>
    </div>
  );
}

function UserLoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaToken(value);
  };

  const addToLocalStorage = (accessToken, user) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("userName", user.userName);
    localStorage.setItem("userId", user.id || user.userId || user._id);
    localStorage.setItem("email", user.email);
  };

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiLogIn({
        email: data.email,
        password: data.password,
        recaptchaToken: recaptchaToken,
      });
      console.log("Response: ", res.data);

      addToLocalStorage(res.data.accessToken, res.data.user);
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/userpage");
      }, 5000);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
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
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring  focus:ring-[#34646E]  "
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
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
        <ReCAPTCHA
          sitekey="6LeJ1SsqAAAAAG6QZYggRff2GtBtvq7mDS3-pxZy"
          onChange={handleRecaptchaChange}
        />
        <button
          type="submit"
          className="bg-[#04071F] text-white font-bold px-4 py-2 rounded w-full mt-2"
        >
          {isSubmitting ? <Loader /> : "Login as User"}
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-2 pb-3">
        Forgot{" "}
        <a href="/login" className="text-gray-600 hover:underline  ">
          Password?
        </a>
      </p>
    </div>
  );
}

function LoginPage() {
  const [role, setRole] = useState("User");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 mt-8 mb-6 pb-1">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back!!</h2>
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
        {role === "Admin" ? <AdminLoginForm /> : <UserLoginForm />}
      </div>
    </div>
  );
}

export default LoginPage;
