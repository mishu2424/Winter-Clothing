import { useState } from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

const Donations = () => {
    const [submitted, isSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    const onSubmit=(data,event)=>{
        console.log(data);
        toast.success("Thank you for you donation! We will contact you soon.");
        event.target.reset();
        isSubmitted(true);
    }
  return (
    <div className="my-3">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6">
          <img src="/Donation.jpg" className="h-full object-cover" alt="" />
        </div>
        <div className="col-span-6 ">
          <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-base-200 border border-base-300 py-1 px-4 rounded-none">
            <legend className="fieldset-legend">Donation details</legend>
            <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input type="text" placeholder="Your Full Name" className="input w-full" {...register("FName", { required: true })} />
            {errors.FName && (
                  <span className="text-red-500">This field is required</span>
                )}
            </fieldset>
            <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Email</legend>
            <input type="email" placeholder="Your Email" className="input w-full" {...register("email", { required: true })} />
            {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Type of Clothes</legend>
              <select defaultValue="Pick a Item" className="select w-full">
                <option>Sweater</option>
                <option>Jacket</option>
                <option>Pants</option>
                <option>Coats</option>
                <option>Others</option>
              </select>
              <span className="fieldset-label">Optional</span>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Quantity of Clothes</legend>
              <select defaultValue="Pick a Item" className="select w-full">
                <option >1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>More</option>
              </select>
              <span className="fieldset-label">Optional</span>
            </fieldset>
            <fieldset className="fieldset">
              <label className="input w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>

                <input type="search" className="grow" placeholder="Location" {...register("location", { required: true })}/>
              </label>
              {errors.location && (
                  <span className="text-red-500">This field is required</span>
                )}
            </fieldset>

            {/* <input type="submit" value="Submit" className="btn bg-red-500 text-white rounded-none w-fit" /> */}
            <button disabled={submitted} className="btn bg-red-500 text-white rounded-none w-fit">{submitted ? 'Submitted' : 'Submit'}</button>
          </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donations;
