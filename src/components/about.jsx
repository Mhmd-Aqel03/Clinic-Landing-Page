import React from "react";

const about = () => {
  return (
    <div className="flex flex-col items-center justify-between mx-6 md:m-0 md:flex-row md:mx-10">
      {/* Image */}
      <div className="mb-4">
        <img
          src="../images/example.jpg"
          alt=""
          className="shadow-2xl bg-gray-200 border-2 border-gray-300 md:rounded-br-[90px] w-[750px] h-auto"
        />
      </div>
      {/* Title and paragraph */}
      <div className="flex flex-col w-full max-w-screen md:min-h-[400px] md:h-full md:ml-5">
        {/* SVG and Title*/}
        <div className="flex flex-row items-end justify-between border-t-2 border-black mb-6 md:border-t-4 md:mt-2">
          {/* SVG thing */}
          <div className="-ml-1.5 hidden md:block">
            <img src="../images/triangle-dots.svg" alt="" />
          </div>
          {/* Title */}
          <h1 className="text-5xl font-poppins font-light mt-6 md:text-6xl">
            Meet Dr.Nabil
          </h1>
        </div>
        {/* Paragraph */}
        <p className="font-openSans text-left text-xl md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at erat
          vitae elit venenatis porta. Integer ornare volutpat enim, et imperdiet
          ipsum sodales nec Fusce dapibus mauris at bibendum vestibulum. Aliquam
          molestie commodo diam a commodo. Donec id est sem.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at erat
          vitae elit venenatis porta. Integer ornare volutpat enim, et imperdiet
          ipsum sodales nec Fusce dapibus mauris at bibendum vestibulum.
        </p>
      </div>
    </div>
  );
};

export default about;
