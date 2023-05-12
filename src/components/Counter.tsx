import {useState} from 'react';

import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div className={classes.counter}>
            <div>count: {count}</div>
            <button onClick={handleIncrement}>increment</button>
        </div>
    );
};
