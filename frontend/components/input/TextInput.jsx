import React from 'react';

export default function TextInput({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  icon,
  className = '',
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="text-slate-600 text-sm font-semibold text-left pl-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative w-full">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full ${icon ? 'py-3.5 pr-14 pl-6' : 'py-3.5 px-6'} rounded-full border ${error ? 'border-red-500' : 'border-slate-200'} bg-white text-slate-900 text-[0.95rem] transition-all duration-200 outline-none focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/10`}
          {...props}
        />
        {icon && (
          <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center text-slate-400">
            {icon}
          </div>
        )}
      </div>
      
      {error && (
        <span className="text-red-500 text-xs pl-2 text-left">
          {error}
        </span>
      )}
    </div>
  );
}
