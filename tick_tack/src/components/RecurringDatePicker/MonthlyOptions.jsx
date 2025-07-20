import { useState } from 'react';

const MonthlyOptions = ({ 
  interval,
  dayOfMonth,
  ordinal,
  weekday,
  onIntervalChange,
  onDayOfMonthChange,
  onOrdinalWeekdayChange
}) => {
  const [mode, setMode] = useState(dayOfMonth !== null ? 'day' : 'weekday');

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Monthly Options</h3>
        <div className="flex items-center space-x-2">
          <span>Every</span>
          <input
            type="number"
            min="1"
            value={interval}
            onChange={(e) => onIntervalChange(parseInt(e.target.value) || 1)}
            className="w-16 px-2 py-1 border rounded-md"
          />
          <span>month(s)</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="monthlyMode"
              checked={mode === 'day'}
              onChange={() => {
                setMode('day');
                onOrdinalWeekdayChange(null, null);
              }}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span>On day</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="monthlyMode"
              checked={mode === 'weekday'}
              onChange={() => {
                setMode('weekday');
                onDayOfMonthChange(null);
              }}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span>On the</span>
          </label>
        </div>

        {mode === 'day' && (
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="1"
              max="31"
              value={dayOfMonth || ''}
              onChange={(e) => onDayOfMonthChange(parseInt(e.target.value) || null)}
              className="w-16 px-2 py-1 border rounded-md"
            />
            <span>day of the month</span>
          </div>
        )}

        {mode === 'weekday' && (
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={ordinal || ''}
              onChange={(e) => onOrdinalWeekdayChange(
                e.target.value ? parseInt(e.target.value) : null,
                weekday !== null ? weekday : 0
              )}
              className="px-2 py-1 border rounded-md"
            >
              <option value="">Select</option>
              <option value="1">First</option>
              <option value="2">Second</option>
              <option value="3">Third</option>
              <option value="4">Fourth</option>
              <option value="-1">Last</option>
            </select>

            <select
              value={weekday !== null ? weekday : ''}
              onChange={(e) => onOrdinalWeekdayChange(
                ordinal !== null ? ordinal : 1,
                e.target.value ? parseInt(e.target.value) : null
              )}
              className="px-2 py-1 border rounded-md"
            >
              <option value="">Select day</option>
              <option value="0">Sunday</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonthlyOptions;