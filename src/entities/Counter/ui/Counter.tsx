import { Button } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={increment}>+</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>-</Button>
        </div>
    );
};
