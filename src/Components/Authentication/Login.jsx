import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "daisyui/components/toast";

const Login = () => {
  const { userLogin, googleSignIn, setEmail } = useContext(AuthContext);
  const [passToggle, setPassToggle] = useState(false);
  const [matchError, setMatchError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const handleForgetPass = () => {
    const email = getValues("email");
    // console.log(email);
    setEmail(email);
    navigate(`/auth/forgetPassword`);
    // navigate(`/auth/forgetPassword?section=hello`);
  };

  const onSubmit = (data) => {
    // reset
    setMatchError("");

    console.log(data);
    if (data.password !== data.CPassword) {
      setMatchError(true);
      return;
    }

    userLogin(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        const redirect = location.state || "/";
        navigate(redirect);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogleSignIN = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const redirect = location.state || "/";
        navigate(redirect);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="p-10 card bg-base-100 w-full md:w-xl mx-auto shrink-0 rounded-none">
        <h2 className="text-2xl text-center font-bold">Login your Account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="fieldset-label font-bold text-black">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                className="input w-full bg-gray-100 rounded-none"
                placeholder="Email"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
              <label className="fieldset-label font-bold text-black">
                Password
              </label>
              <div className="relative">
                <input
                  type={`${passToggle ? "text" : "password"}`}
                  className="input w-full bg-gray-100 rounded-none relative"
                  placeholder="Password"
                  name="password"
                  {...register("password", { required: true })}
                />
                {passToggle ? (
                  <IoEyeOffSharp
                    onClick={() => setPassToggle(!passToggle)}
                    className="absolute top-3 right-3 cursor-pointer"
                    size={16}
                  />
                ) : (
                  <IoEye
                    onClick={() => setPassToggle(!passToggle)}
                    className="absolute top-3 right-3 cursor-pointer"
                    size={16}
                  />
                )}
              </div>
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              <label className="fieldset-label font-bold text-black">
                Confirm Password
              </label>
              <input
                type="password"
                className="input w-full bg-gray-100 rounded-none"
                placeholder="Password"
                name="confirmPassword"
                {...register("CPassword", { required: true })}
              />
              {errors.CPassword && (
                <span className="text-red-500">This field is required</span>
              )}
              {matchError && (
                <span className="text-red-500">Passwords didn't match</span>
              )}
              <div>
                <Link onClick={handleForgetPass} className="link link-hover">
                  Forgot password?
                </Link>
              </div>
              <button className="btn btn-neutral mt-4 w-full">Login</button>
              <p className="text-center font-semibold py-3">
                New User ?{" "}
                <Link
                  state={location?.state && location.state}
                  className="text-red-500 link-hover"
                  to={`/auth/register`}
                >
                  Register
                </Link>
              </p>
              <div className="divider">OR</div>
              <button
                onClick={handleGoogleSignIN}
                className="w-full btn rounded-full flex items-center"
              >
                <FcGoogle />{" "}
                <span className="font-semibold">Sign in with Google</span>
              </button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
