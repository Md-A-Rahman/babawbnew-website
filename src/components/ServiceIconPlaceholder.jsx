import React from "react";

export default function ServiceIconPlaceholder({ className = "" }) {
  return (
    <div className={`w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white mb-4 ${className}`}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    </div>
  );
}
