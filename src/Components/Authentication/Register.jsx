import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const Register = () => {
  const { googleSignIn, createUser, updatedProfile } = useContext(AuthContext);
  const [passToggle, setPassToggle] = useState(false);
  const [confirmPassToggle, seConfirmPassToggle] = useState(false);
  const [passError, setPassError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data,e) => {
    console.log(data)
    setPassError('');
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    console.log(data,passwordRegex.test(data.password));
    if(!passwordRegex.test(data.password)) {
        console.log('entered')
        setPassError(true);
        return;
    }
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updatedProfile(data.fName, data.photoURL)
        .then(()=>{
          navigate(`${location.state || '/'}`)
        })
        .catch(error=>{
          toast.error(error.message)
        })
      })
      .catch((error) => {
        toast.error(error.message);
      });
    e.target.reset();  
  };

  const handleGoogleSignIN = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state || '/'}`)
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="p-10 card bg-base-100 w-full md:w-xl mx-auto shrink-0 rounded-none">
        <h2 className="text-2xl text-center font-bold">
          Register your Account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="fieldset-label font-bold text-black">
                Name
              </label>
              <input
                type="text"
                className="input w-full bg-gray-100 rounded-none"
                placeholder="Name"
                name="name"
                {...register("fName", { required: true })}
              />
              {errors.fName && (
                <span className="text-red-500">This field is required</span>
              )}
              <label className="fieldset-label font-bold text-black">
                Photo URL
              </label>
              <input
                type="text"
                className="input w-full bg-gray-100 rounded-none"
                placeholder="Your Photo URL"
                name="name"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && (
                <span className="text-red-500">This field is required</span>
              )}
              <label className="fieldset-label font-bold text-black">
                Email
              </label>
              <input
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
                {passError && (
                  <div>
                    <ul className="list-disc pl-5 text-red-500">
                      <li>
                        At least <strong>8</strong> characters
                      </li>
                      <li>
                        Must contain{" "}
                        <strong>1 uppercase letter (A-Z)</strong>
                      </li>
                      <li>
                        Must contain{" "}
                        <strong>1 lowercase letter (a-z)</strong>
                      </li>
                      <li>
                        Must contain <strong>1 number (0-9)</strong>
                      </li>
                      <li>
                         Must contain <strong>1 special character</strong> (@
                        $ ! % * ? &)
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              <label className="fieldset-label py-3">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox"
                  {...register("terms", { required: true })}
                />
                <span>
                  Accept <span className="font-bold">Terms and conditions</span>
                </span>
              </label>
              {errors.terms && (
                <span className="text-red-500">
                  You have to accept our terms and policy before the
                  registration.
                </span>
              )}
              {/* {error?.terms && (
                <label className="fieldset-label text-xs font-bold text-rose-600">
                  {error.terms}
                </label>
              )}
              {error?.loginIssue && (
                <label className="fieldset-label text-xs font-bold text-rose-600">
                  {error.loginIssue}
                </label>
              )} */}

              <button className="btn btn-neutral mt-4 w-full">Register</button>
              <p className="text-center font-semibold py-3">
                Already have an account ?{" "}
                <Link className="text-red-500 link-hover" to={`/auth/login`}>
                  Login
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

export default Register;
