// import { useEffect } from "react";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const ForgetPass = () => {
  const { email, passwordReset } = useContext(AuthContext);
  const location = useLocation();
  const [sent, isSent] = useState(false);
  // console.log(location, email);

  useEffect(() => {
    console.log("Location state:", location.state); // Debugging
  }, [location]);

  const handleForgetSubmit = (e) => {
    e.preventDefault();
    console.log('hello')
    const form = new FormData(e.target);
    const fEmail = form.get("fEmail");
    console.log(fEmail);
    if (!fEmail) {
      toast.error("Please enter your email");
      return;
    }
    passwordReset(fEmail)
      .then(() => {
        const domain = fEmail.split("@")[1];

        let emailProviderUrl = "";

        switch (domain) {
          case "gmail.com":
            emailProviderUrl = "https://mail.google.com/mail/u/0/#inbox";
            break;
          case "outlook.com":
          case "hotmail.com":
          case "live.com":
            emailProviderUrl = "https://outlook.live.com";
            break;
          case "yahoo.com":
            emailProviderUrl = "https://mail.yahoo.com";
            break;
          case "aol.com":
            emailProviderUrl = "https://mail.aol.com";
            break;
          case "zoho.com":
            emailProviderUrl = "https://mail.zoho.com";
            break;
          default:
            alert("Email provider not recognized.");
            return;
        }

        // Redirect to the email provider
        window.open(emailProviderUrl, "_blank");
        isSent(true);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  // const queryParams = new URLSearchParams(location.search);
  // const section = queryParams.get("section");

  // console.log("ForgetPass section:", section);
  return (
    <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
      <div className="p-10 card bg-base-100 h-fit border rounded-md md:w-xl shrink-0">
        <div className="card-body">
          <fieldset className="fieldset">
            <form onSubmit={handleForgetSubmit}>
              <label className="fieldset-label font-bold text-black">
                Email
              </label>
              <input
                type="email"
                className="input w-full bg-gray-100 rounded-none"
                placeholder="Email"
                name="fEmail"
                defaultValue={email && email}
              />
              <button type="submit" disabled={sent} className="btn btn-accent text-white mt-4 w-full">
                {sent ? 'Sent!' : 'Send'}
              </button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
