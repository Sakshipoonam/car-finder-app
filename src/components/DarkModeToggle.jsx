import React, { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode]);

  return (
    <div className="form-check form-switch mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="darkModeSwitch"
        onChange={() => setDarkMode(!darkMode)}
      />
      <label className="form-check-label" htmlFor="darkModeSwitch">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </label>
    </div>
  );
}