import React, { type FC } from 'react';
import './index.css';

export interface ButtonInterface {
  size?: string;
  children?: any;
}

const CuButton: FC<ButtonInterface> = (props) => {
  const { children } = props;

  return (
    <button type="button" className="cu-btn">
      {children}
    </button>
  );
};

export default CuButton;
