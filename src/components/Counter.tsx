import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment} className={classes.btn}>
        increment
      </button>
    </>
  );
};
