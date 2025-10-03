import React from 'react';

// A reusable button component built with Tailwind CSS
const Button = ({ children, primary = true, className = '', ...props }) => {
  return (
    <button
      className={`
        px-4 py-2 rounded font-medium transition-all duration-300 
        ${primary 
          ? 'bg-primary text-white hover:bg-dark hover:-translate-y-1 hover:shadow-md' 
          : 'bg-transparent border border-white text-white hover:bg-white/10 hover:-translate-y-1'
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 