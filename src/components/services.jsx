import React from "react";
import SingleService from "./singleService";
const services = () => {
  return (
    <div className="mt-9 md:mt-[100px]">
      {/* Header */}
      <h1 className="text-5xl font-poppins font-light text-left mb-6 mx-4 md:hidden">
        Our Services
      </h1>
      <div className="my-4 flex flex-col items-center space-y-4 w-full px-2">
        <div className="flex flex-row items-center space-x-4 w-full">
          <span className="w-full">
            <SingleService
              name={"Implants"}
              photo={"../images/icons-services/dental-implant.png"}
            />
          </span>
          <span className="w-full md:hidden">
            <SingleService
              name={"prosthetics"}
              photo={"../images/icons-services/dental-crown.png"}
            />
          </span>
          <span className="hidden md:block w-full">
            <h1 className="text-8xl font-Poppins text-center font-light -mt-[150px]">
              Our Services
            </h1>
          </span>
        </div>

        <div className="flex flex-row items-center space-x-4 w-full">
          <SingleService
            name={"Fillings"}
            photo={"../images/icons-services/filling.png"}
          />
          <SingleService
            name={"Veneers"}
            photo={"../images/icons-services/dental-veneer.png"}
          />
        </div>

        <div className="flex flex-row items-center space-x-4 w-full">
          <SingleService
            name={"Root Canal treatment"}
            photo={"../images/icons-services/root-canal.png"}
          />
          <SingleService
            name={"Tooth Extraction"}
            photo={"../images/icons-services/tooth-extraction.png"}
          />
        </div>
        <div className="flex flex-row items-center space-x-4 w-full">
          <SingleService
            name={"Teeth cleaning"}
            photo={"../images/icons-services/dental-floss.png"}
          />
          <SingleService
            name={"TMJ pain treatment"}
            photo={"../images/icons-services/TMJ-disorder 1@2x.png"}
          />
        </div>
        <div className="flex flex-row items-center space-x-4 w-1/2 md:hidden">
          <SingleService
            name={"General oral diagnosis"}
            photo={"../images/icons-services/ulcer.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default services;
