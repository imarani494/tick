export const FREQUENCY_OPTIONS = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
};

export const WEEKDAYS = [
  { id: 'sunday', label: 'Sun', value: 0 },
  { id: 'monday', label: 'Mon', value: 1 },
  { id: 'tuesday', label: 'Tue', value: 2 },
  { id: 'wednesday', label: 'Wed', value: 3 },
  { id: 'thursday', label: 'Thu', value: 4 },
  { id: 'friday', label: 'Fri', value: 5 },
  { id: 'saturday', label: 'Sat', value: 6 },
];

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const MONTH_OPTIONS = MONTHS.map((month, index) => ({
  value: index,
  label: month,
}));

export const ORDINAL_OPTIONS = [
  { value: 1, label: 'First' },
  { value: 2, label: 'Second' },
  { value: 3, label: 'Third' },
  { value: 4, label: 'Fourth' },
  { value: -1, label: 'Last' },
];