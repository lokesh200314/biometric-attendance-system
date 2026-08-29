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
      className={[
        'rounded-md border border-indigo-500 bg-indigo-500 px-4 py-3 font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-60',
        className,
      ].join(' ')}
      {...props}
    >
      {children || text}
    </button>
  );
}
