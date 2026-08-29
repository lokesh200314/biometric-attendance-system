import React, { useState } from 'react';
import PrimaryButton from '../../components/button/PrimaryButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password, rememberMe });
    alert(`Logging in with: ${email}`);
  };

  const handleBiometricLogin = (type) => {
    alert(`Initializing ${type} scan...`);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="mb-3 text-4xl">🔒</div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Welcome Back</h2>
          <p className="mt-2 text-sm text-slate-400">Sign in to your attendance portal</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-200">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-slate-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
            />
          </div>

          <div className="mt-2 flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-slate-300">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 accent-indigo-500"
              />
              Remember me
            </label>
            <a href="#forgot" className="font-semibold text-indigo-400 transition hover:text-indigo-300 hover:underline">
              Forgot Password?
            </a>
          </div>

          <PrimaryButton type="submit" className="mt-2 w-full">
            Sign In
          </PrimaryButton>
        </form>

        <div className="my-6 flex items-center text-center text-[11px] uppercase tracking-[0.2em] text-slate-500 before:mr-3 before:flex-1 before:border-b before:border-white/10 before:content-[''] after:ml-3 after:flex-1 after:border-b after:border-white/10 after:content-['']">
          Or Secure sign in with
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-800/50 px-3 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300"
            onClick={() => handleBiometricLogin('Face ID')}
          >
            <span>👤</span>
            Face ID
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-800/50 px-3 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300"
            onClick={() => handleBiometricLogin('Fingerprint')}
          >
            <span>👆</span>
            Fingerprint
          </button>
        </div>
      </div>
    </div>
  );
}
