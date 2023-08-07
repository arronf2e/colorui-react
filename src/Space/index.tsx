import React, { type FC } from 'react';

export interface SpaceInterface {
  size?: number;
  direction: 'vertical' | 'horizontal';
  children?: React.ReactNode;
}

const prefixCls = 'cu-space';

const CuSpace: FC<SpaceInterface> = (props) => {
  const { children } = props;
  return (
    <div className={prefixCls}>
      {React.Children.map(children, (child, index) => {
        return (
          <div className="cu-space-item" key={index}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default CuSpace;
