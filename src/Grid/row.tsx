import React, { type FC } from 'react';

export interface RowInterface {
  children?: React.ReactNode;
}

const CuRow: FC<RowInterface> = ({ children }) => (
  <div className={'flex'}>{children}</div>
);

export default CuRow;
