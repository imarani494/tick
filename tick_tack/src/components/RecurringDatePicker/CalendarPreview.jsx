import { format, isSameMonth, addMonths } from 'date-fns';

const CalendarPreview = ({ dates }) => {
  if (dates.length === 0) return null;

  const startDate = dates[0];
  const endDate = dates.length > 1 ? dates[dates.length - 1] : addMonths(startDate, 1);
  
  const months = [];
  let currentDate = new Date(startDate);
  
  while (isSameMonth(currentDate, endDate) || currentDate <= endDate) {
    months.push(new Date(currentDate));
    currentDate = addMonths(currentDate, 1);
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Preview</h3>
      <div className="flex flex-wrap gap-4">
        {months.map((month) => (
          <MonthPreview key={month.toString()} month={month} dates={dates} />
        ))}
      </div>
    </div>
  );
};

const MonthPreview = ({ month, dates }) => {
  const monthName = format(month, 'MMMM yyyy');
  const daysInMonth = [];
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  
 
  for (let i = 0; i < firstDay.getDay(); i++) {
    daysInMonth.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
  }
  
  
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const currentDate = new Date(month.getFullYear(), month.getMonth(), day);
    const isSelected = dates.some(date => 
      date.getFullYear() === currentDate.getFullYear() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getDate() === currentDate.getDate()
    );
    
    daysInMonth.push(
      <div 
        key={day} 
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          isSelected 
            ? 'bg-blue-500 text-white font-medium' 
            : 'hover:bg-gray-100'
        }`}
      >
        {day}
      </div>
    );
  }
  
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm border">
      <h4 className="text-center font-medium mb-2">{monthName}</h4>
      <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-500">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="font-medium">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {daysInMonth}
      </div>
    </div>
  );
};

export default CalendarPreview;