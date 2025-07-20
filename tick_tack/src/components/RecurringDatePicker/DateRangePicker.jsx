import { useState } from "react";

const DateRangePicker = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange
}) => {
  const [hasEndDate, setHasEndDate] = useState(!!endDate);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Date Range</h3>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span>Start date:</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="px-2 py-1 border rounded-md"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={hasEndDate}
            onChange={(e) => {
              setHasEndDate(e.target.checked);
              if (!e.target.checked) {
                onEndDateChange("");
              }
            }}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
          />
          <span>End date:</span>
          <input
            type="date"
            value={endDate || ""}
            onChange={(e) => onEndDateChange(e.target.value)}
            disabled={!hasEndDate}
            min={startDate}
            className={`px-2 py-1 border rounded-md ${
              !hasEndDate ? "bg-gray-100 text-gray-400" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
