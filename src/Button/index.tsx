import React, { type FC } from 'react';
import './style';

export interface ButtonInterface {
  size?: string;
  children?: any;
}

const prefixCls = 'cu-button';

const CuButton: FC<ButtonInterface> = (props) => {
  const { children } = props;

  return (
    <button type="button" className={prefixCls}>
      {children}
    </button>
  );
};

export default CuButton;
