import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from '../Button';

describe('Button', () => {
    it('test render', () => {
        render(<Button>Hi</Button>);

        expect(screen.getByText('Hi')).toBeInTheDocument();
    });

    it('test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Hi</Button>);

        expect(screen.getByText('Hi')).toHaveClass('clear');
    });
});
