import {useState} from 'react';

import './Counter.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>count: {count}</div>
            <button onClick={handleIncrement}>increment</button>
        </div>
    );
};
