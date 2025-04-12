import React, { useEffect, useState } from "react";
import DatePicker from "../components/datePicker";
import dayjs from "dayjs";
const BookPage = () => {
  const [date, setDate] = useState(dayjs());
  useEffect(() => {
    
  })
  return (
    <div className="flex flex-col mt-[75px] mx-4 items-center">
      <div className="text-2xl font-poppins">Please pick a date and time.</div>
      <div className="">
        <DatePicker
          value={date}
          onChange={(newDate) => {
            setDate(newDate);
          }}
        />
      </div>
      <div>{date.format("YYYY/MM/DD")}</div>
    </div>
  );
};

export default BookPage;
