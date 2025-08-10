"use client";

import React from "react";
import { useTheme } from "./ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-2 text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-100 active:scale-[0.99] transition dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-blue-900/40"
    >
      {/* Sun icon for dark mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={theme === "dark" ? "h-5 w-5" : "hidden"}
      >
        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .414.336.75.75.75Zm0-19.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0V3.75A.75.75 0 0 0 12 3Zm9 9a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h1.5c.414 0 .75-.336.75-.75ZM5.25 12a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0 0 1.5h1.5c.414 0 .75-.336.75-.75Zm12.52 6.23a.75.75 0 0 0 1.06 0l1.06-1.06a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 0 1.06Zm-12.52-12.46a.75.75 0 0 0 0-1.06L3.19 3.65a.75.75 0 1 0-1.06 1.06l1.06 1.06a.75.75 0 0 0 1.06 0Zm0 12.46-1.06 1.06a.75.75 0 1 0 1.06 1.06l1.06-1.06a.75.75 0 0 0 1.06-1.06ZM18.31 5.77l1.06-1.06a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06Z" />
      </svg>
      {/* Moon icon for light mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={theme === "light" ? "h-5 w-5" : "hidden"}
      >
        <path d="M21.752 15.002A9.718 9.718 0 0 1 12 21.75a9.75 9.75 0 0 1-9.75-9.75 9.718 9.718 0 0 1 6.748-9.253.75.75 0 0 1 .908.99A8.25 8.25 0 1 0 20.76 14.844a.75.75 0 0 1 .992.908Z" />
      </svg>
    </button>
  );
}
