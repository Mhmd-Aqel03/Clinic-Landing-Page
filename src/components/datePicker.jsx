import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const datePicker = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        label="Pick a date"
        value={value}
        onChange={onChange}
        // Removes the "CANCEL" and "OK"
        slotProps={{
          actionBar: { actions: [] },
        }}
        // Removes the text above the calender
        slots={{
          toolbar: null,
        }}
      />
    </LocalizationProvider>
  );
};

export default datePicker;
