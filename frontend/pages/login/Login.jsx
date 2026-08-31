import React, { useState } from 'react';
import TextInput from '../../components/input/TextInput';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in:', { email, password, rememberMe });
    alert(`Welcome back, logging in with: ${email}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-[#f3f5f8] px-6 font-sans">
      <div className="bg-white rounded-3xl p-14 w-full max-w-[480px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-black/[0.02] transition-transform duration-300 hover:scale-[1.01]">
        {/* Logo Section */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="w-7 h-7 bg-emerald-950 rounded-full flex justify-center items-center text-white text-xs font-bold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-sans text-2xl font-bold text-emerald-950 tracking-tight">DomExpenses</span>
        </div>

        {/* Title Section */}
        <div className="text-left mb-8">
          <h2 className="font-sans text-slate-900 text-3xl font-bold mb-1.5">Login</h2>
          <p className="text-slate-500 text-[0.95rem]">Welcome back! Let's track the records</p>
        </div>

        {/* Form Section */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <TextInput
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email ID / User Name"
            required

          />

          <TextInput
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            icon={
              <button
                type="button"
                className="text-slate-400 hover:text-emerald-900 cursor-pointer focus:outline-none transition-colors"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            }
          />

          <div className="flex justify-between items-center text-sm mt-1">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer font-medium select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-emerald-950 accent-emerald-950 cursor-pointer"
              />
              Remember me
            </label>
            <a href="#forgot" className="text-slate-600 font-medium hover:text-emerald-950 hover:underline">
              Forgot Passcode?
            </a>
          </div>

          <button
            type="submit"
            className="bg-[#0b4f4a] hover:bg-[#083c38] text-white py-3.5 px-6 rounded-full font-semibold text-base w-full cursor-pointer shadow-md transition-all duration-200 mt-4 active:scale-[0.98]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
