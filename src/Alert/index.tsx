import React, { type FC } from 'react';

import './style/index'

export interface AlertProps {
  /**
   * @description 属性描述
   * @default "默认值"
   */
  type?: 'info' | 'positive' | 'negative' | 'warning';
}

const prefixCls = 'cu-alert';

const CuAlert: FC<AlertProps> = ({ type = 'info' }) => <h4 className={prefixCls}>{type}</h4>;

export default CuAlert;
