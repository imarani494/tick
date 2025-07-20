const DailyOptions = ({ interval, onChange }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Daily Options</h3>
      <div className="flex items-center space-x-2">
        <span>Every</span>
        <input
          type="number"
          min="1"
          value={interval}
          onChange={(e) => onChange(parseInt(e.target.value) || 1)}
          className="w-16 px-2 py-1 border rounded-md"
        />
        <span>day(s)</span>
      </div>
    </div>
  );
};

export default DailyOptions;