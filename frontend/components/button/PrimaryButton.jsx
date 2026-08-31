import React from 'react';

export default function PrimaryButton({ 
  children, 
  text,
  onClick, 
  type = 'button', 
  disabled = false, 
  className = '', 
  ...props 
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children || text}
    </button>
  );
}
