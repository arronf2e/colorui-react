import React, { type FC } from 'react';
import './style/index';
export interface ButtonInterface {
  title?: string;
}

const CuButton: FC<ButtonInterface> = (props) => (
  <div className="cu-btn">{props.title}</div>
);

export default CuButton;
