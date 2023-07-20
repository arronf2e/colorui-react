import React, { type FC } from 'react';

import './style/index';

export interface AlertProps {
  type?: 'info' | 'positive' | 'negative' | 'warning';
}

// const prefixCls = 'cu-alert';

const CuAlert: FC<AlertProps> = () => (
  <>
    <h4 className="truncate">
      This is a long text that will be truncated with an ellipsis if it
      overflows the container.
    </h4>
  </>
);

export default CuAlert;
