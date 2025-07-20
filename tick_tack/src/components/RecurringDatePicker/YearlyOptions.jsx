import { MONTH_OPTIONS } from './constants';

const YearlyOptions = ({ 
  interval, 
  dayOfMonth, 
  month, 
  onIntervalChange, 
  onDayOfMonthChange,
  onMonthChange
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Yearly Options</h3>
        <div className="flex items-center space-x-2">
          <span>Every</span>
          <input
            type="number"
            min="1"
            value={interval}
            onChange={(e) => onIntervalChange(parseInt(e.target.value) || 1)}
            className="w-16 px-2 py-1 border rounded-md"
          />
          <span>year(s)</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <select
          value={month !== null ? month : ''}
          onChange={(e) => onMonthChange(parseInt(e.target.value))}
          className="px-2 py-1 border rounded-md"
        >
          <option value="">Select month</option>
          {MONTH_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="flex items-center space-x-2">
          <span>on day</span>
          <input
            type="number"
            min="1"
            max="31"
            value={dayOfMonth || ''}
            onChange={(e) => onDayOfMonthChange(parseInt(e.target.value) || null)}
            className="w-16 px-2 py-1 border rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default YearlyOptions;