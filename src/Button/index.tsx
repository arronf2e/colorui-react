import React, { type FC } from 'react';

export interface ButtonInterface {
  /**
   * @description 属性描述
   * @default "默认值"
   */
  title?: string;
}

const CuButton: FC<ButtonInterface> = (props) => <h4>{props.title}</h4>;

export default CuButton;
