# Recurring Date Picker with Theme Toggling

![Project Preview](https://via.placeholder.com/800x500?text=Recurring+Date+Picker+Demo) 
*(Replace with actual screenshot)*

A production-ready React component that enables complex recurring date selection with theme customization, built using modern web technologies.

## Features

- 🗓️ **Recurrence Patterns**
  - Daily, weekly, monthly, and yearly scheduling
  - Custom intervals (every N days/weeks/months)
  - Advanced monthly patterns (e.g., "2nd Tuesday of each month")
  
- 🎨 **Theme System**
  - 4 built-in color themes (Light, Dark, Ocean, Sunset)
  - Smooth theme transition animations
  - Full CSS customization support

- 🖥️ **UI Components**
  - Interactive mini calendar preview
  - Responsive design (mobile-friendly)
  - Accessible form controls

## Installation

```bash
npm install recurring-date-picker date-fns



src/
├── components/
│   ├── RecurringDatePicker/
│   │   ├── CalendarPreview.jsx
│   │   ├── DailyOptions.jsx
│   │   ├── DateRangePicker.jsx
│   │   ├── FrequencySelector.jsx
│   │   ├── MonthlyOptions.jsx
│   │   ├── RecurringDatePicker.jsx
│   │   ├── WeeklyOptions.jsx
│   │   ├── YearlyOptions.jsx
│   │   ├── constants.js
│   │   └── utils.js
├── App.jsx
├── main.jsx
├── index.css
Technology Stack
Core Dependencies:
Core Capabilities
Recurrence Pattern Engine

Supports daily/weekly/monthly/yearly patterns

Handles advanced rules (nth weekday, custom intervals)

Timezone-aware date calculations using date-fns

Live preview of generated dates

Theme System

4 built-in color themes (light/dark/ocean/sunset)

CSS variable-based theming

Smooth transition animations between themes

UI Components

Interactive calendar grid

Dynamic form controls for recurrence options

Responsive layout (mobile → desktop)

React 18+ (Component architecture)

Tailwind CSS 3+ (Utility-first styling)

date-fns (Date manipulation)

clsx (Conditional class names)

Development Tools:

Vite (Build tool)

Storybook (Component documentation)

Jest + Testing Library (Testing)

ESLint + Prettier (Code quality)

Husky + lint-staged (Git hooks)
