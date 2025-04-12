import React, { useEffect, useState } from "react";
import DatePicker from "../components/datePicker";
import TimeSlot from "../components/timeSlot";
import dayjs from "dayjs";
// date.format("YYYY/MM/DD")
const BookPage = () => {
  const [date, setDate] = useState(dayjs());
  const [bookings, setBookings] = useState([]);
  // Step of form, for transtion between step.
  const [step, setStep] = useState(1);
  // Our form
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    date: dayjs().format("YYYY-MM-DD"),
    time: "",
  });
  // Get bookings from backend.
  useEffect(() => {
    const getTimes = async () => {
      try {
        const res = await fetch(`/api/getBookings/${date.format("YYYY-MM-DD")}`);

        const data = await res.json();

        setBookings(data.times);
      } catch (error) {
        console.log("error fetching bookings: " + error);
      }
    };

    getTimes();
  }, [date]);

  // For form changes
  const handleChange = (e) => {
    setForm({
      ...form, // this copies the already exisitant object data, React magic ig.
      [e.target.name]: e.target.value,
    });
  };
  // Validate data, and go to next step
  const goNext = () => {
    if (
      form.firstName === "" ||
      form.lastName === "" ||
      form.email === "" ||
      form.phoneNumber === ""
    ) {
      alert("Not all feilds entered!");
    } else if (!form.email.includes("@")) {
      alert("Please enter a valid Email!");
    } else if (!/^\d{10}$/.test(form.phoneNumber)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    } else {
      setStep(2);
    }
  };
  // Select time onClick
  const selectTime = (newTime) => {
    setForm({
      ...form, // this copies the already exisitant object data, React magic ig.
      time: newTime,
    });
  };
  // Submit booking
  const submit = async () => {
    if (form.time === "") {
      alert("Please select a time!");
    } else {
      try {
        const res = await fetch("api/book", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phoneNumber: form.phoneNumber,
            time: form.time,
            date:form.date
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          console.log(
            "something went wrong with connecting to API: " + data.msg
          );
        } else {
          alert("Booking set correctly");
        }
      } catch (error) {
        console.log("something went wrong while posting job: " + error);
      }
    }
  };
  return (
    <div className="relative w-[200%] overflow-hidden max-w-full">
      {/* Container for step 1 and 2 of form. */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${step === 1 ? "0%" : "-100%"})` }}
      >
        {/* Step 1 form */}
        <div className="w-[100%] flex-shrink-0 mt-[100px] px-4 md:px-[30%]">
          <div className="text-2xl font-poppins -mt-9 mb-9">
            Please enter your information.
          </div>
          {/* Div for all feilds */}
          <div className="flex flex-col ">
            {/* first name last name */}
            <div className="flex flex-col">
              {/* First Name */}
              <div className="flex flex-col w-full md:flex-row md:justify-between">
                <div className="md:w-[80%] md:mr-3">
                  {" "}
                  <label
                    htmlFor="firstName"
                    className="block text-lg font-medium text-gray-900 font-poppins"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className="transition-colors duration-75 ease-in-out block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-balck outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 focus:bg-gray-300 mb-2"
                    />
                  </div>
                </div>
                <div className="md:w-[80%] md:ml-3">
                  {/* Last Name */}
                  <label
                    htmlFor="lastName"
                    className="block text-lg font-medium text-gray-900 font-poppins"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className="transition-colors duration-75 ease-in-out block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-balck outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 focus:bg-gray-300 mb-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Phone Number */}
            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="block text-lg font-medium text-gray-900 font-poppins"
              >
                Phone number
              </label>
              <div className="mt-2 w-[100%]">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className="transition-colors duration-75 ease-in-out block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-balck outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 focus:bg-gray-300 mb-2"
                />
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-900 font-poppins"
              >
                Email
              </label>
              <div className="mt-2 w-[100%]">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="transition-colors duration-75 ease-in-out block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-balck outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 focus:bg-gray-300 mb-2"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <button
              className="flex flex-row transition-colors duration-500 ease-in-out p-3 px-6 pt-2 pb-2 text-black font-poppins bg-gray-300 rounded-[17px] baseline hover:bg-gray-400 hover:text-ourBlue"
              onClick={goNext}
            >
              Next
              <img
                src="../images/right-arrow.png"
                alt=""
                className="w-[25px] ml-1"
              />
            </button>
          </div>
        </div>
        {/* Step 2 form */}
        <div className="flex flex-col mt-[75px] flex-shrink-0 w-[100%] px-4 md:px-[30%]">
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
              <TimeSlot
                text={booking}
                func={selectTime}
                selected={form.time === booking}
              />
            ))}
          </div>

          <div className="flex flex-row justify-between w-full mt-9">
            {/* back button */}
            <button
              className="flex flex-row transition-colors duration-500 ease-in-out p-3 px-6 pt-2 pb-2 text-black font-poppins bg-gray-300 rounded-[17px] baseline hover:bg-gray-400 hover:text-ourBlue"
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

            <button
              className="transition-colors duration-500 ease-in-out p-3 px-6 pt-2 pb-2 text-white font-poppins bg-ourBlue rounded-[17px] baseline hover:bg-gray-300 hover:text-ourBlue "
              onClick={submit}
            >
              Comfirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
