import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { updatedProfile, updateUserEmail, user, emailVerification } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const updateUserProfile = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value, e.target.photo.value)
    updatedProfile(e.target.name.value, e.target.photo.value)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleEmailUpdate = (e) => {
    e.preventDefault();
    // emailVerification().then(() => {
    //   updateUserEmail(e.target.email.value)
    //     .then(() => {
    //       navigate("/");
    //     })
    //     .catch((error) => {
    //       toast.error(error.message);
    //     });
    // }).catch(error=>{
    //     toast.error(error.message);
    // })
  };
  return (
    <div>
      <div className="p-10 card bg-base-100 w-full md:w-xl mx-auto shrink-0 rounded-none">
        <h2 className="text-2xl text-center font-bold">Update Your Profile</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <form onSubmit={updateUserProfile}>
              <label className="fieldset-label font-bold text-black">
                Name
              </label>
              <input
                type="text"
                className="input w-full bg-gray-100 rounded-none"
                placeholder="Name"
                name="name"
              />
              <label className="fieldset-label font-bold text-black">
                Photo URL
              </label>
              <input
                type="text"
                className="input w-full bg-gray-100 rounded-none"
                placeholder="Your Photo URL"
                name="photo"
              />

              <button className="btn btn-neutral mt-4 w-full">Update</button>
            </form>
            <div className="divider">OR</div>
            <h2 className="text-2xl text-center font-bold">
              Change Your Email
            </h2>
            <form onSubmit={handleEmailUpdate}>
              <label className="fieldset-label font-bold text-black">
                Email
              </label>
              <input
                type="text"
                className="input w-full bg-gray-100 rounded-none"
                placeholder={`Your current email address ${user?.email}`}
                name="email"
              />
              <button className="btn btn-neutral mt-4 w-full">Update</button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
