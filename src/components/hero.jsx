import React from 'react'

const hero = () => {
  return (
    // Parallex background
    <div className="h-[600px] flex flex-col items-start bg-fixed md:bg-fixed bg-parallax bg-cover md:h-[700px] md:max-w-full">
      {/* parellex photo */}
      <div className="md:mx-3">
        {/* Welcome Text*/}
        <div className="mb-10 mt-9 text-4xl p-6 md:pt-30 md:p-10 font-poppins md:text-8xl font-medium text-white">
          Bright Smiles
          <br />
          Healthy Teeth ;)
        </div>
        {/* Buttons */}
        <div className="px-6 flex flex-col md:items-start w-screen md:flex-row items-center md:w-1/3  md:p-10 md:space-x-2">
          <a
            href=""
            className="whitespace-nowrap text-center text-xl w-full m-2 transition-colors duration-500 ease-in-out p-1.5 text-white font-poppins bg-ourBlue rounded-full baseline hover:bg-gray-300 hover:text-ourBlue md:block md:px-6 md:pt-2 md:pb-2 md:text-2xl md:p-3 md:w-auto"
          >
            Book Now
          </a>
          <a
            href=""
            className="whitespace-nowrap text-center text-xl w-full m-2 transition-colors duration-500 ease-in-out p-1.5 text-white font-poppins bg-ourBlue rounded-full baseline hover:bg-gray-300 hover:text-ourBlue md:block md:px-6 md:pt-2 md:pb-2 md:text-2xl md:p-3 md:w-auto"
          >
            Call <span className="font-semibold">079 151 5725</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default hero