import React, { useEffect, useState } from "react";
import DatePicker from "../components/datePicker";
import TimeSlot from "../components/timeSlot";
import dayjs from "dayjs";
// date.format("YYYY/MM/DD")
const BookPage = () => {
  const [date, setDate] = useState(dayjs());
  const [bookings, setBookings] = useState([
    "11:30",
    "12:00",
    "12:30",
    "11:30",
    "12:00",
    "12:30",
    "11:30",
    "12:00",
    "12:30",
  ]);
  const [step, setStep] = useState(1);
  // Get bookings from backend.
  useEffect(() => {});
  return (
    <div className="relative w-[200%] overflow-hidden max-w-full">
      {/* Container for step 1 and 2 of form. */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${step === 1 ? "0%" : "-100%"})` }}
      >
        {/* Step 1 form to be added */}
        <div className="w-[100%] flex-shrink-0 mt-[100px]">
          Step 1<button onClick={() => setStep(2)}>test</button>
        </div>
        {/* Step 2 form */}
        <div className="flex flex-col mt-[75px] flex-shrink-0 w-[100%] px-4">
          <div className="text-2xl font-poppins">
            Please pick a date and time.
          </div>
          <div className="">
            <DatePicker
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
            />
          </div>
          <div className="flex flex-wrap justify-center">
            {bookings.map((booking) => (
              <TimeSlot text={booking} />
            ))}
          </div>

          <div className="flex flex-row justify-between w-full mt-9">
            {/* back button */}
            <button
              className="flex flex-row transition-colors duration-500 ease-in-out p-3 px-6 pt-2 pb-2 text-black font-poppins bg-gray-300 rounded-[17px] baseline hover:bg-gray-400 hover:text-ourBlue md:block"
              onClick={() => setStep(1)}
            >
              <img
                src="../images/left-arrow.png"
                alt=""
                className="w-[25px] mr-1"
              />
              Back
            </button>

            {/* Book button */}

            <span className="transition-colors duration-500 ease-in-out p-3 px-6 pt-2 pb-2 text-white font-poppins bg-ourBlue rounded-[17px] baseline hover:bg-gray-300 hover:text-ourBlue md:block">
              Comfirm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
