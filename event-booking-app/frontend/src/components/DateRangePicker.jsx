import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const InputDateRangePicker = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(), // Default to today
      endDate: new Date(),   // Default to today
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges) => {
    console.log(ranges.selection); // Log the selected range
    setDateRange([ranges.selection]); // Update state with new range
  };

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-center mb-4">Select a Date Range</h3>
      <div className="flex justify-center">
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <DateRangePicker
            ranges={dateRange}
            onChange={handleSelect}
            className="w-full" // Ensures it takes full width inside the container
          />
        </div>
      </div>
    </div>
  );
};

export default InputDateRangePicker;
