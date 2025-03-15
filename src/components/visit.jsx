import React from "react";
import GM from './googleMap'

const visit = () => {
  return (
    <div className="bg-gray-100 py-3">
      <div className="flex flex-col mx-6 my-8 md:flex-row  md:space-x-8 md:mx-10">
        {/* image collage */}
        {/* <div className="grid grid-cols-2 gap-2 mb-12 md:w-1/2">
          <img
            src="../images/smile3.jpg"
            alt=""
            className="w-full h-auto overflow-hidden"
            loading="lazy"
          />
          <img
            src="../images/smile2.jpg"
            alt=""
            className="w-full h-auto rounded-tr-xl overflow-hidden"
            loading="lazy"
          />
          <img
            src="../images/smile1.jpg"
            alt=""
            className="max-w-100% h-auto overflow-hidden object-cover object-center"
            loading="lazy"
          />
          <img
            src="../images/chair2.jpg"
            alt=""
            className="max-w-100% h-auto  overflow-hidden object-cover object-center"
            loading="lazy"
          />
        </div> */}
        <img
          src="../images/gallary2.png"
          alt=""
          className="max-h-[600px] mb-[50px]"
          loading="lazy"
        />
        {/* visit us details */}
        <div className="flex flex-col w-5/6 md:my-9">
          {/* Header */}
          <h1 className="text-5xl font-poppins font-light text-left mb-6 md:text-6xl">
            Visit Us!
          </h1>
          {/* paragraph */}
          <p className="font-openSans text-left text-xl md:text-2xl md:mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
            erat vitae elit venenatis porta. Integer ornare volutpat enim, et
            imperdiet ipsum sodales nec.
          </p>
          {/* div for location, time and map */}
          <div className="flex flex-row">
            {/* Location and time */}
            <div className="flex-flex-col md:hidden">
              {/* Location */}
              <div className="flex flex-row mt-8 ">
                <img
                  src="../images/map.png"
                  alt=""
                  className="h-[30px] w-[30px] md:h-[30px] md:w-[30px]"
                />
                <div className="flex flex-col ml-8 text-left text-xl md:text-lg">
                  <p className="font-openSans ">Some Adress Very Adress</p>
                  <p className="font-openSans">101</p>
                  <a
                    href=""
                    className="text-center text-xl w-full m-2 transition-colors duration-500 ease-in-out p-1.5 text-white font-poppins bg-ourBlue rounded-full baseline hover:bg-gray-300 hover:text-ourBlue md:block md:px-6 md:pt-2 md:pb-2 md:text-2xl md:p-3 md:w-auto xl:hidden"
                  >
                    Directions
                  </a>
                </div>
              </div>
              {/* Time */}
              <div className="flex flex-row mt-8 text-left text-xl md:text-lg md:mt-[100px]">
                <img
                  src="../images/clock.png"
                  alt=""
                  className="h-[30px] w-[30px] md:h-[30px] md:w-[30px]"
                />
                <div className="flex flex-col ml-8">
                  <p className="font-openSans">ALL DAY - EVERY DAY</p>
                </div>
              </div>
            </div>
            <GM />
          </div>
        </div>
      </div>
    </div>
  );
};

export default visit;
