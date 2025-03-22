import { useState, useEffect } from 'react';


//code written by reuben

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Apply the selected theme to the document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark'); 

      localStorage.setItem('theme', 'dark'); 
    } else {
      document.documentElement.classList.remove('dark'); 

      localStorage.setItem('theme', 'light'); 
      
    }
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
          theme === 'dark' ? 'translate-x-6 bg-slate-300' : 'translate-x-0'
        }`}
      ></div>
    </button>
  );
};

export default ThemeToggle;
