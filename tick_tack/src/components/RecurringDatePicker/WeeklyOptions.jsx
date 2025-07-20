import { WEEKDAYS } from './constants';

const WeeklyOptions = ({ interval, daysOfWeek, onIntervalChange, onDaysOfWeekChange }) => {
  const toggleDay = (dayValue) => {
    const newDays = daysOfWeek.includes(dayValue)
      ? daysOfWeek.filter(d => d !== dayValue)
      : [...daysOfWeek, dayValue].sort((a, b) => a - b);
    onDaysOfWeekChange(newDays);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Weekly Options</h3>
        <div className="flex items-center space-x-2">
          <span>Every</span>
          <input
            type="number"
            min="1"
            value={interval}
            onChange={(e) => onIntervalChange(parseInt(e.target.value) || 1)}
            className="w-16 px-2 py-1 border rounded-md"
          />
          <span>week(s) on:</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {WEEKDAYS.map((day) => (
          <button
            key={day.value}
            type="button"
            onClick={() => toggleDay(day.value)}
            className={`px-3 py-1 rounded-md border ${
              daysOfWeek.includes(day.value)
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeeklyOptions;