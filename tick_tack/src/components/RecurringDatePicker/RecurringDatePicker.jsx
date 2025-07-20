import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { FREQUENCY_OPTIONS } from './constants';
import FrequencySelector from './FrequencySelector';
import DailyOptions from './DailyOptions';
import WeeklyOptions from './WeeklyOptions';
import MonthlyOptions from './MonthlyOptions';
import YearlyOptions from './YearlyOptions';
import DateRangePicker from './DateRangePicker';
import CalendarPreview from './CalendarPreview';
import { generateRecurringDates } from './utils';

const RecurringDatePicker = ({ onChange, initialConfig }) => {
  const [config, setConfig] = useState({
    frequency: FREQUENCY_OPTIONS.DAILY,
    interval: 1,
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: '',
    daysOfWeek: [],
    dayOfMonth: null,
    month: null,
    ordinal: null,
    weekday: null,
    ...initialConfig
  });

  const [previewDates, setPreviewDates] = useState([]);

  useEffect(() => {
    const dates = generateRecurringDates(config);
    setPreviewDates(dates);
    onChange && onChange(config);
  }, [config]);

  const handleFrequencyChange = (frequency) => {
    setConfig(prev => ({
      ...prev,
      frequency,
      daysOfWeek: [],
      dayOfMonth: null,
      month: null,
      ordinal: null,
      weekday: null
    }));
  };

  const handleIntervalChange = (interval) => {
    setConfig(prev => ({ ...prev, interval: Math.max(1, interval) }));
  };

  const handleStartDateChange = (date) => {
    setConfig(prev => ({ ...prev, startDate: date }));
  };

  const handleEndDateChange = (date) => {
    setConfig(prev => ({ ...prev, endDate: date }));
  };

  const handleDaysOfWeekChange = (days) => {
    setConfig(prev => ({ ...prev, daysOfWeek: days }));
  };

  const handleDayOfMonthChange = (day) => {
    setConfig(prev => ({ ...prev, dayOfMonth: day }));
  };

  const handleMonthChange = (month) => {
    setConfig(prev => ({ ...prev, month }));
  };

  const handleOrdinalWeekdayChange = (ordinal, weekday) => {
    setConfig(prev => ({ ...prev, ordinal, weekday }));
  };

  return (
    <div className="space-y-6 p-4 bg-white rounded-lg shadow-md">
      <FrequencySelector 
        frequency={config.frequency} 
        onChange={handleFrequencyChange} 
      />

      <div className="space-y-4">
        {config.frequency === FREQUENCY_OPTIONS.DAILY && (
          <DailyOptions 
            interval={config.interval} 
            onChange={handleIntervalChange} 
          />
        )}

        {config.frequency === FREQUENCY_OPTIONS.WEEKLY && (
          <WeeklyOptions 
            interval={config.interval} 
            daysOfWeek={config.daysOfWeek} 
            onIntervalChange={handleIntervalChange}
            onDaysOfWeekChange={handleDaysOfWeekChange}
          />
        )}

        {config.frequency === FREQUENCY_OPTIONS.MONTHLY && (
          <MonthlyOptions 
            interval={config.interval}
            dayOfMonth={config.dayOfMonth}
            ordinal={config.ordinal}
            weekday={config.weekday}
            onIntervalChange={handleIntervalChange}
            onDayOfMonthChange={handleDayOfMonthChange}
            onOrdinalWeekdayChange={handleOrdinalWeekdayChange}
          />
        )}

        {config.frequency === FREQUENCY_OPTIONS.YEARLY && (
          <YearlyOptions 
            interval={config.interval}
            dayOfMonth={config.dayOfMonth}
            month={config.month}
            onIntervalChange={handleIntervalChange}
            onDayOfMonthChange={handleDayOfMonthChange}
            onMonthChange={handleMonthChange}
          />
        )}
      </div>

      <DateRangePicker 
        startDate={config.startDate} 
        endDate={config.endDate} 
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
      />

      <CalendarPreview dates={previewDates} />
    </div>
  );
};

export default RecurringDatePicker;