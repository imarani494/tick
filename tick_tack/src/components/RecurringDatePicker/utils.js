import { 
  addDays, 
  addWeeks, 
  addMonths, 
  addYears, 
  isSameDay, 
  startOfMonth, 
  endOfMonth, 
  getDay, 
  getDate, 
  format,
  isBefore,
  isAfter,
  parseISO
} from 'date-fns';

export const generateRecurringDates = (config, count = 10) => {
  const { frequency, interval, startDate, endDate, daysOfWeek, dayOfMonth, month, ordinal, weekday } = config;
  const dates = [];
  let currentDate = new Date(startDate);
  const endDateObj = endDate ? new Date(endDate) : null;

  for (let i = 0; i < count; i++) {
    if (endDateObj && isAfter(currentDate, endDateObj)) break;

    dates.push(new Date(currentDate));

    switch (frequency) {
      case 'daily':
        currentDate = addDays(currentDate, interval);
        break;
      case 'weekly':
        if (daysOfWeek && daysOfWeek.length > 0) {
          const currentDay = getDay(currentDate);
          const nextDays = daysOfWeek.filter(d => d > currentDay).sort((a, b) => a - b);
          
          if (nextDays.length > 0) {
            currentDate = addDays(currentDate, nextDays[0] - currentDay);
          } else {
            currentDate = addDays(currentDate, (7 - currentDay + daysOfWeek[0]));
          }
        } else {
          currentDate = addWeeks(currentDate, interval);
        }
        break;
      case 'monthly':
        if (ordinal && weekday !== undefined) {
          currentDate = getNthWeekdayOfMonth(currentDate, ordinal, weekday, interval);
        } else if (dayOfMonth) {
          currentDate = addMonths(currentDate, interval);
          const daysInMonth = getDate(endOfMonth(currentDate));
          currentDate = setDate(currentDate, Math.min(dayOfMonth, daysInMonth));
        } else {
          currentDate = addMonths(currentDate, interval);
        }
        break;
      case 'yearly':
        currentDate = addYears(currentDate, interval);
        if (month !== undefined && dayOfMonth) {
          currentDate.setMonth(month);
          const daysInMonth = getDate(endOfMonth(currentDate));
          currentDate.setDate(Math.min(dayOfMonth, daysInMonth));
        }
        break;
      default:
        currentDate = addDays(currentDate, interval);
    }
  }

  return dates;
};

const getNthWeekdayOfMonth = (date, ordinal, weekday, interval) => {
  let resultDate = new Date(date);
  resultDate = addMonths(resultDate, interval);
  
  if (ordinal === -1) { // Last
    const lastDay = endOfMonth(resultDate);
    let lastWeekday = new Date(lastDay);
    
    while (getDay(lastWeekday) !== weekday) {
      lastWeekday = addDays(lastWeekday, -1);
    }
    
    return lastWeekday;
  } else {
    const firstDay = startOfMonth(resultDate);
    let firstOccurrence = new Date(firstDay);
    
    // Find first occurrence of the weekday
    while (getDay(firstOccurrence) !== weekday) {
      firstOccurrence = addDays(firstOccurrence, 1);
    }
    
    // Add weeks to get to the nth occurrence
    return addDays(firstOccurrence, (ordinal - 1) * 7);
  }
};