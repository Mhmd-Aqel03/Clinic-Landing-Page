import React from "react";
// suck me nutsss slmaoaoaoaoao
const singleService = ({ photo, name, arrow = false, hide = false }) => {
  return (
    <a
      href=""
      className={`flex flex-col space-y-9 w-full h-[150px] bg-gray-300 rounded-1xl p-3 transition-colors duration-500 ease-in-out ${
        arrow
          ? "text-white bg-ourBlue hover:bg-lightOurBlue"
          : "hover:bg-gray-400"
      } ${hide ? "hidden" : ""}`}
    >
      {/* Service Cute logo */}
      <img src={photo} alt="" className="w-[50px] md:w-[60px]" />
      {/* services Name */}
      <h6 className="font-poppins text-1xl font-medium md:text-2xl">{name}</h6>
      
    </a>
  );
};

export default singleService;
