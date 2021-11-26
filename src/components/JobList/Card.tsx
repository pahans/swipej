import React from 'react';

interface ICard {
  children: React.ReactNode;
  color: string;
}

const Card = ({ children, color }: ICard): JSX.Element => {
  return <div className={`flex justify-between py-2 px-4 ${color}`}>{children}</div>;
};

export default Card;
