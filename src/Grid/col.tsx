import classnames from 'classnames';
import React, { type FC } from 'react';

export interface ColInterface {
  span?: number;
}

const CuCol: FC<ColInterface> = ({ span = 1 }) => {
  const colClass = classnames(`flex-${span}`);
  return <div className={colClass}>你好</div>;
};

export default CuCol;
