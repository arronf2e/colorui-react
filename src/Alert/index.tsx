import React, { type FC } from 'react';

import './style/index';

export interface AlertProps {
  type?: 'info' | 'positive' | 'negative' | 'warning';
}

// const prefixCls = 'cu-alert';

const CuAlert: FC<AlertProps> = ({ type = 'info' }) => (
  <h4 className="m-10">{type}</h4>
);

export default CuAlert;
