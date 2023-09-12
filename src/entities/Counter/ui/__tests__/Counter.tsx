import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { componentRender } from 'shared/libs/tests/componentRender/componentRender';
import { Counter } from '../Counter';

describe('Counter', () => {
    it('should display correct counter value', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });

    it('should display correct counter value after increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('increment-btn'));

        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });

    it('should display correct counter value after decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('decrement-btn'));

        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});
