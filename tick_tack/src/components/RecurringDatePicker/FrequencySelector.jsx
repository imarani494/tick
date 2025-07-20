import { FREQUENCY_OPTIONS } from './constants';

const FrequencySelector = ({ frequency, onChange }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Recurrence Pattern</h3>
      <div className="flex flex-wrap gap-4">
        {Object.entries(FREQUENCY_OPTIONS).map(([key, value]) => (
          <label key={value} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              checked={frequency === value}
              onChange={() => onChange(value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="capitalize">{key.toLowerCase()}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FrequencySelector;