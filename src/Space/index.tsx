import classNames from 'classnames';
import React, { type FC } from 'react';

export interface SpaceInterface {
  size?: number;
  direction: 'vertical' | 'horizontal';
  children?: React.ReactNode;
}

const CuSpace: FC<SpaceInterface> = (props) => {
  const { size = 10, direction = 'horizontal', children } = props;

  const spaceClass = classNames('flex', {
    'flex-col': direction === 'vertical',
  });

  console.log(spaceClass, 'spaceClass');

  return (
    <div
      className={spaceClass}
      style={{
        gap: `${size}px`,
      }}
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
