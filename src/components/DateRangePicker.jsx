// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/DatePickerOverride.css';

const DateRangePicker = ({startDate, setStartDate, endDate, setEndDate, disabled}) => {


  return (
    <div className="flex-col md:flex md:flex-row justify-center md:gap-4 items-center bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-xl shadow-lg border border-cyan-500/40">
      <div className="flex flex-col">
        <label className="text-sm text-cyan-400 mb-1">From</label>
        <DatePicker
          className="text-base text-cyan-400 font-semibold text-center focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300 rounded-lg p-2"
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Pick a date"
          dateFormat="MM-dd-yyyy"
          showYearDropdown
          yearDropdownItemNumber={70}
          scrollableYearDropdown
          disabled={disabled}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-cyan-400 mb-1">To</label>
        <DatePicker
          className="text-base text-cyan-400 font-semibold text-center focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300 rounded-lg p-2"
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Pick a date"
          dateFormat="MM-dd-yyyy"
          showYearDropdown
          yearDropdownItemNumber={70}
          scrollableYearDropdown
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
