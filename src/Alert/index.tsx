import React, { type FC } from 'react';

export interface AlertProps {
  type?: 'info' | 'positive' | 'negative' | 'warning';
}

const prefixCls = 'cu-alert';

const CuAlert: FC<AlertProps> = ({ type = 'info' }) => <h4 className={prefixCls}>{type}</h4>;

export default CuAlert;
