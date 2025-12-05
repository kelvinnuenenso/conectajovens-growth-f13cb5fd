import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-yellow text-brand-black hover:bg-brand-accent-gold hover:scale-105 focus:ring-brand-yellow",
    secondary: "bg-brand-gray-dark text-white border border-brand-yellow hover:bg-brand-gray-graphite hover:text-brand-yellow focus:ring-brand-gray-dark",
    outline: "bg-transparent text-brand-yellow border-2 border-brand-yellow hover:bg-brand-yellow hover:text-brand-black",
    ghost: "bg-transparent text-white hover:text-brand-yellow hover:bg-white/5",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;