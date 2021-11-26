import React from 'react';

interface IButton {
  children: string | React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  type?: 'outline' | 'regular';
  className?: string;
}

const Button = ({ children, onClick, type = 'regular', className = '' }: IButton): JSX.Element => {
  const bg = type === 'outline' ? 'bg-white' : ' bg-gray-900';
  const color = type === 'outline' ? 'text-gray-900' : 'text-white';
  return (
    <button
      onClick={onClick}
      className={`py-4 ${bg} ${color} rounded-md border-gray-100 border-2 opacity-90 hover:opacity-100 hover:border-gray-200 ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
