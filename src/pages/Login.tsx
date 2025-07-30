import React, { useState } from 'react';
import Button from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    // Handle login here
  };

  return (
    <div className="pt-16 min-h-screen bg-[#F9FAFB] flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your EchoLeads account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent"
                required
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-[#F2A339] hover:text-[#D88D26] text-sm">
              Forgot your password?
            </a>
          </div>

          <div className="mt-6 text-center">
            <span className="text-gray-600 text-sm">Don't have an account? </span>
            <a href="#" className="text-[#F2A339] hover:text-[#D88D26] text-sm font-medium">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;