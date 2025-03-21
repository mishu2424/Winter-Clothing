import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import 'animate.css';
const Delivery = () => {
  return (
    <div className="flex px-10 items-center justify-around py-14 shadow">
      <div className="flex items-center gap-3 animate__shakeY">
        <FaShippingFast size={40}/>
        <h2 className="text-xl font-semibold">Shipping Worldwide</h2>
      </div>
      <div className="flex items-center gap-3">
        <RiSecurePaymentFill size={40}/>
        <h2 className="text-xl font-semibold">Security Payment</h2>
      </div>
      <div className="flex items-center gap-3">
        <MdAssignmentReturn size={40}/>
        <h2 className="text-xl font-semibold">21 Days Return</h2>
      </div>
    </div>
  );
};

export default Delivery;
