import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-4';
  
  const variantClasses = {
    primary: 'bg-[#F2A339] hover:bg-[#D88D26] text-white focus:ring-[#FFB44D]/30',
    secondary: 'bg-[#2E3192] hover:bg-[#252A7A] text-white focus:ring-[#2E3192]/30',
    outline: 'border-2 border-[#F2A339] text-[#F2A339] hover:bg-[#F2A339] hover:text-white focus:ring-[#FFB44D]/30'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;