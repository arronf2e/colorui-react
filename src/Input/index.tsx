import React, { type FC } from 'react';

export interface InputInterface {
  title?: string;
  styles: CSSStyleDeclaration;
}

const prefixCls = 'cu-input';

const CuInput: FC<InputInterface> = () => (
  <input className={prefixCls} type="text" placeholder="please input" />
);

export default CuInput;
