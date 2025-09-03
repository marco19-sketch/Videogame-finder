// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = ({startDate, setStartDate, endDate, setEndDate, disabled}) => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

  return (
    <div>
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
  );
};

export default DateRangePicker;
