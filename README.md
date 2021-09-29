# sphaget

# WIP

## Name....?

https://youtu.be/c1DDBtYqA4U?t=124

## Usage

```jsx
import React, { useEffect, useState } from 'react';
import { WithSphaget } from 'spahget';

function Handler({ state, _handleSomething, otherProp, ...props }) {
  return (
    <>
      <label>{otherProp}</label>
      <label style={{ marginRight: '8px', marginLeft: '8px' }}>{state.h}</label>
      <button onClick={_handleSomething}>Change</button>
    </>
  );
}

function useStateDefinitions() {
  const [h, setH] = useState('hello');
  return {
    h,
    setH,
  };
}

function useEffectDefinitons(state) {
  useEffect(() => {
    if (state.h === 'world') {
      setTimeout(() => {
        state.setH('world from effect');
      }, 1000);
    }
  }, [state]);
}

function _handleSomething() {
  this.setH('world');
}

export default WithSphaget(
  // Component
  Handler,
  {
    // Handlers to be passed with names
    _handleSomething,
  },
  //  state and effect runners, pass an empty object
  {
    useStateDefinitions,
    useEffectDefinitons,
  }
);
```
