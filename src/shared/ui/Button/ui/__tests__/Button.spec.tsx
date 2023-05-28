import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button';

describe('Button', () => {
    it('test render', () => {
        render(<Button>Hi</Button>);

        expect(screen.getByText('Hi')).toBeInTheDocument();
    });

    it('test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Hi</Button>);

        expect(screen.getByText('Hi')).toHaveClass('clear');
    });
});
