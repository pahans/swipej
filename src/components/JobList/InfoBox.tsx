import React from 'react';

interface IInfoBox {
  align?: 'right' | 'left';
  title: string | React.ReactNode;
  text: string | React.ReactNode;
}

const InfoBox = ({ align = 'left', title, text }: IInfoBox): JSX.Element => {
  return (
    <div className={align === "left" ? "text-left" : "text-right" }>
      <div className="text-xs font-bold">{title}</div>
      <div className="text-2xl font-semibold text-white">{text}</div>
    </div>
  );
};

export default InfoBox;
