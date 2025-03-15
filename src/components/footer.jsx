import React from "react";

const footer = () => {
  return (
    <div className="flex flex-col bg-ourBlue">
      <div className="flex flex-col items-center gap-8 p-3 md:flex-row md:justify-between md:px-9">
        {/* "Logo" */}
        <div className="text-4xl font-poppins font-extralight text-white">
          Dr.Nabil Clinic
        </div>
        {/* Social */}
        <div className="flex flex-col">
          <div className="">
            <h1 className="text-4xl font-poppins font-light text-white mb-2">
              Reach Out
            </h1>
          </div>
          <div className="flex flex-row gap-4">
            <a href="" className="w-9">
              <img src="../images/sm-icons/face.png" alt="" />
            </a>
            <a href="" className="w-9">
              <img src="../images/sm-icons/insta.png" alt="" />
            </a>
            <a href="" className="w-9">
              <img src="../images/sm-icons/wta.png" alt="" />
            </a>
            <a href="" className="w-9">
              <img src="../images/sm-icons/git.png" alt="" />
            </a>
          </div>
        </div>
        {/* Contact Us */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-poppins text-white font-light -mb-2">
            Contanct Us
          </h1>
          <div className="flex flex-col">
            <div className="flex flex-row gap-4">
              <a href="" className="w-9">
                <img
                  src="../images/sm-icons/mail.png"
                  alt=""
                  className="w-[250px]"
                />
              </a>
              <a href="" className="w-9">
                <img src="../images/phone.png" alt="" className="w-[250px]" />
              </a>
            </div>
          </div>
        </div>
        <a
          href=""
          className="transition-colors duration-500 ease-in-out p-3 px-6 pt-2 pb-2 text-outBlue font-poppins bg-white rounded-[17px] baseline text-2xl hover:bg-lightOurBlue hover:text-white"
        >
          Book Now
        </a>
      </div>
      <div className="text-white text-center">Copyright &copy; 2025, All rights Reserved</div>
    </div>
  );
};

export default footer;
