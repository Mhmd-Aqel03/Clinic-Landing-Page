import React from 'react'
import DatePicker from '../components/datePicker'
const BookPage = () => {
  return (
    <div className="flex flex-col mt-[75px] mx-4">
      <div className="text-2xl font-poppins">
        Please pick a date and time.
      </div>
      <div className="">
        <DatePicker />
      </div>
    </div>
  );
}

export default BookPage