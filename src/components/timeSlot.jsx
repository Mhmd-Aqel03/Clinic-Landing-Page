import React from "react";

const TimeSlot = ({ text, func, selected }) => {
  return (
    <button
      className={`border-2 border-solid border-gray-300 mx-2 my-2 rounded-[12px] ${selected? "bg-gray-300":"bg-gray-200"}`}
      onClick={() => func(text)}
    >
      <p className="font-poppins px-3 py-1 font-medium">{text}</p>
    </button>
  );
};

export default TimeSlot;
