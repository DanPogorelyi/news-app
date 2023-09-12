import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/libs/tests/componentRender/componentRender';
import { Sidebar } from '../Sidebar';

describe('Sidebar', () => {
    it('render', () => {
        componentRender(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    it('should toggle sidebar', () => {
        componentRender(<Sidebar />);

        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
