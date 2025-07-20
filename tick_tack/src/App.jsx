import { useState } from 'react';
import RecurringDatePicker from "./components/RecurringDatePicker/RecurringDatePicker";


const themes = {
  light: {
    bg: 'bg-gray-50',
    card: 'bg-white',
    text: 'text-gray-800',
    heading: 'text-blue-600',
    border: 'border-gray-200'
  },
  dark: {
    bg: 'bg-gray-900',
    card: 'bg-gray-800',
    text: 'text-gray-100',
    heading: 'text-blue-400',
    border: 'border-gray-700'
  },
  ocean: {
    bg: 'bg-blue-50',
    card: 'bg-blue-100',
    text: 'text-blue-900',
    heading: 'text-blue-700',
    border: 'border-blue-200'
  },
  sunset: {
    bg: 'bg-amber-50',
    card: 'bg-amber-100',
    text: 'text-amber-900',
    heading: 'text-amber-700',
    border: 'border-amber-200'
  }
};

function App() {
  const [config, setConfig] = useState(null);
  const [currentTheme, setCurrentTheme] = useState('light');

  const handleChange = (config) => {
    console.log("Recurrence config:", config);
    setConfig(config);
  };

  const toggleTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  const theme = themes[currentTheme];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme.bg} p-4 md:p-8`}>
      <div className={`max-w-3xl mx-auto rounded-xl shadow-lg transition-all duration-300 ${theme.card} ${theme.border} border p-6`}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <h1 className={`text-2xl font-bold mb-4 md:mb-0 ${theme.heading}`}>
            Recurring Date Picker
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {Object.keys(themes).map((themeName) => (
              <button
                key={themeName}
                onClick={() => toggleTheme(themeName)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  currentTheme === themeName 
                    ? 'bg-blue-500 text-white' 
                    : `${theme.text} bg-opacity-20 ${theme.card}`
                }`}
              >
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <RecurringDatePicker onChange={handleChange} />
          
          {config && (
            <div className={`mt-8 p-4 rounded-lg border ${theme.border} transition-colors`}>
              <h2 className={`text-lg font-semibold mb-2 ${theme.heading}`}>
                Current Configuration
              </h2>
              <pre className={`text-sm p-3 rounded overflow-x-auto ${theme.bg} ${theme.text}`}>
                {JSON.stringify(config, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;