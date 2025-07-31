import React, { useState } from 'react';
import Button from '../components/Button';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleRedirect = () => {
    // Redirect to the actual Echoleads login page
    window.location.href = 'https://agents.echoleads.ai/login';
  };

  const handleToggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="pt-16 min-h-screen bg-[#F9FAFB] flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isSignup ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-gray-600">
              {isSignup ? 'Sign up for your Echoleads account' : 'Sign in to your EchoLeads account'}
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                {isSignup 
                  ? 'Create your Echoleads account to get started with AI-powered lead generation'
                  : 'Access your Echoleads dashboard to manage your AI agents and campaigns'
                }
              </p>
            </div>

            <Button 
              onClick={handleRedirect} 
              variant="primary" 
              className="w-full"
            >
              {isSignup ? 'Create Account' : 'Sign In to Dashboard'}
            </Button>
          </div>

          <div className="mt-6 text-center">
            <span className="text-gray-600 text-sm">
              {isSignup ? 'Already have an account? ' : "Don't have an account? "}
            </span>
            <button
              onClick={handleToggleForm}
              className="text-[#F2A339] hover:text-[#D88D26] text-sm font-medium"
            >
              {isSignup ? 'Sign In' : 'Get Started'}
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              You will be redirected to the Echoleads Agents dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;