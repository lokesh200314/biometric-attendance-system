import React from 'react';

export default function SelectInput({
  label,
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder,
  required = false,
  error,
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
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full py-3.5 pr-10 pl-6 rounded-full border ${error ? 'border-red-500' : 'border-slate-200'} bg-white ${value ? 'text-slate-900' : 'text-slate-400'} text-[0.95rem] appearance-none transition-all duration-200 outline-none focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/10 cursor-pointer`}
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((option, idx) => {
            const isObject = typeof option === 'object' && option !== null;
            const val = isObject ? option.value : option;
            const labelText = isObject ? option.label : option;
            return (
              <option key={idx} value={val} className="text-slate-900">
                {labelText}
              </option>
            );
          })}
        </select>
        
        {/* Chevron icon */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center text-slate-400">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {error && (
        <span className="text-red-500 text-xs pl-2 text-left">
          {error}
        </span>
      )}
    </div>
  );
}
