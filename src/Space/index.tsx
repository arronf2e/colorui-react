import React, { type FC } from 'react';

export interface SpaceInterface {
  size?: number;
  direction: 'vertical' | 'horizontal';
  children?: React.ReactNode;
}

const CuSpace: FC<SpaceInterface> = (props) => {
  const { direction = 'horizontal', children } = props;

  return (
    <div
      className={`flex ${direction === 'vertical' ? 'flex-col' : ''} cu-gap-4`}
    >
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
