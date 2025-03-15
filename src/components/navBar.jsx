import React from 'react'
import { useState } from 'react';
const navBar = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
  return (
    // NavBar
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md w-full max-w-screen">
      {/* Flex Container for items */}
      <div className="flex items-center justify-between px-2 md:mx-10">
        {/* Logo */}
        <div className="">
          {/* <img
            src="./images/no_background_logo.png"
            alt=""
            className="w-16 h-16"
          /> */}
          <div className="text-2xl font-poppins font-light text-ourBlue py-2 px-2">
            Dr.Nabil Clinic
          </div>
        </div>
        {/* Links And Button*/}
        <div className="hidden md:flex space-x-12">
          {/* Links */}
          <div className="space-x-6 pt-2">
            <a href="#" className="font-poppins text-xl hover:text-gray-400">
              About
            </a>
            <a href="#" className="font-poppins text-xl hover:text-gray-400">
              Our Services
            </a>
            <a href="#" className="font-poppins text-xl hover:text-gray-400">
              Visit Us
            </a>
            <a
              href="tel:0791515725"
              className="font-poppins text-xl hover:text-gray-400"
            >
              Call <span className="font-semibold">079 151 5725</span>
            </a>
          </div>
          {/* Link Button */}
          <div className="pr-2">
            <a
              href=""
              className="transition-colors duration-500 ease-in-out p-3 px-6 pt-2 pb-2 text-white font-poppins bg-ourBlue rounded-[17px] baseline hover:bg-gray-300 hover:text-ourBlue md:block"
            >
              Book Now
            </a>
          </div>
        </div>
        {/* Menu */}
        <button
          className={` ${
            isOpen ? "open " : ""
          }block burger md:hidden focus:outline-none`}
          onClick={toggleMenu}
        >
          <span className="burger-top"></span>
          <span className="burger-mid"></span>
          <span className="burger-bot"></span>
        </button>
      </div>
      {/* Menu items  */}
      <div className="md:hidden">
        <div
          className={`flex flex-col absolute items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a
            href=""
            className="p-3 px-6 pt-2 pb-2 text-white font-poppins bg-ourBlue rounded-[17px] baseline hover:bg-lightOurBlue md:block"
          >
            Book Now
          </a>
          <a href="#" className="font-poppins text-xl hover:text-gray-400">
            About
          </a>
          <a href="#" className="font-poppins text-xl hover:text-gray-400">
            Our Services
          </a>
          <a href="#" className="font-poppins text-xl hover:text-gray-400">
            Visit Us
          </a>
          <a
            href="tel:0791515725"
            className="font-poppins text-xl hover:text-gray-400"
          >
            Call 079 151 5725
          </a>
        </div>
      </div>
    </nav>
  );
}

export default navBar