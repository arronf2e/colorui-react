import React, { type FC } from 'react';
import './style';
export interface AlertProps {
  type?: 'info' | 'positive' | 'negative' | 'warning';
}

const prefixCls = 'cu-alert';

const CuAlert: FC<AlertProps> = () => (
  <>
    <div className={prefixCls}>
      This is a long text that will be truncated with an ellipsis if it
      overflows the container.This is a long text that will be truncated with an
      ellipsis if it overflows the container.
    </div>
  </>
);

export default CuAlert;
