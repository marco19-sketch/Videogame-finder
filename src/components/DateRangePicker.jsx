// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/DatePIckerOverride.css';

const DateRangePicker = ({startDate, setStartDate, endDate, setEndDate, disabled}) => {


  return (
     <div className="flex gap-4 items-center bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-xl shadow-lg border border-cyan-500/40">
      <div className="flex flex-col">
        <label className="text-sm text-cyan-400 mb-1">From</label>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="From"
        dateFormat="yyyy-MM-dd"
        showYearDropdown
        yearDropdownItemNumber={70}
        scrollableYearDropdown
        disabled={disabled}
      />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-cyan-400 mb-1">To</label>
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="To"
        dateFormat="yyyy-MM-dd"
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
