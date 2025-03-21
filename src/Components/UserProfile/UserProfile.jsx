import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile=()=>{
    navigate('/auth/updatedProfile')
  }
  return (
    <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
      <div className="w-fit flex flex-col items-center justify-center gap-2 bg-base-200 p-20 rounded-md">
        {user?.displayName && <p className="text-base"><span className="font-bold">User Name :</span> {user.displayName}</p>}
        {
            user?.photoURL && <img className="rounded-full w-36 h-36 object-cover" src={user.photoURL} alt="" />
        }
        {user?.email && <p className="text-base"><span className="font-bold">User Email :</span> {user?.email}</p>}
        <button onClick={handleUpdateProfile} className="bg-purple-500 text-white rounded-none btn">Update Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
