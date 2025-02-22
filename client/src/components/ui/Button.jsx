
import React from 'react';

const Button = ({ children, className, variant, onClick }) => {
  const baseClass = "px-6 py-2 rounded text-lg font-semibold focus:outline-none transition-colors";
  const variantClass = variant === 'outline' ? 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white' : 'bg-green-600 text-white hover:bg-green-700';

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
