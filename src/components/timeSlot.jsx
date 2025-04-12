import React from "react";

const TimeSlot = ({ text }) => {
  return (
    <span className="bg-gray-200 border-2 border-solid border-gray-300 mx-2 my-2 rounded-[12px]">
      <p className="font-poppins px-3 py-1 font-medium">{text}</p>
    </span>
  );
};

export default TimeSlot;
