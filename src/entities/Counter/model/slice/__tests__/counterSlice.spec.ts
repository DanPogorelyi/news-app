import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from '../counterSlice';

describe('counterSlice', () => {
    it('should return correct value after increment', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });

    it('should return correct value after decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });

    it('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
