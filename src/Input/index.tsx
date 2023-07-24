import React, { type FC } from 'react';

export interface InputInterface {
  title?: string;
  styles: CSSStyleDeclaration;
}

const CuInput: FC<InputInterface> = () => (
  <input type="text" placeholder="please input" />
);

export default CuInput;
