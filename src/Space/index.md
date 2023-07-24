---
title: Space 间距
nav:
  title: 组件
  order: 2
group:
  title: 布局
  order: 1
---

# Space

设置组件之间的间距。

```jsx
import { useState } from 'react';
import { CuSpace } from 'colorui-react';

export default () => {
  const [space, setSpace] = useState(10);
  const [direction, setDirection] = useState(true);
  const handleRangeChange = (e) => setSpace(e.target.value);
  const handleDirectionChange = (e) => {
    setDirection((direction) => !direction);
  };
  return (
    <CuSpace direction="vertical" size={20}>
      <div>
        <input type="range" onChange={handleRangeChange} />{' '}
        <span>间距：{space}</span>
      </div>
      <div>
        <input type="checkbox" onChange={handleDirectionChange} />{' '}
        <span>方向：{direction ? 'horizontal' : 'vertical'}</span>
      </div>
      <CuSpace size={space} direction={direction ? 'horizontal' : 'vertical'}>
        <span>hello</span>
        <span>world</span>
      </CuSpace>
    </CuSpace>
  );
};
```

## API

| 属性      | 说明     | 类型     | 默认值     |
| --------- | -------- | -------- | ---------- | ---------- |
| size      | 间隔大小 | number   | 10         |
| direction | 间距方向 | vertical | horizontal | horizontal |
