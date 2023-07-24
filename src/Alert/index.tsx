import React, { type FC } from 'react';
export interface AlertProps {
  type?: 'info' | 'positive' | 'negative' | 'warning';
}

// const prefixCls = 'cu-alert';

const CuAlert: FC<AlertProps> = () => (
  <>
    <h4 className="truncate color-#0000ff">
      This is a long text that will be truncated with an ellipsis if it
      overflows the container.
    </h4>
  </>
);

export default CuAlert;
