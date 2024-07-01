import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CollapseBtn from 'shared/ui/CollapseBtn/ui/CollapseBtn';
import { useCollapse } from '../CollapseBtnContext';

jest.mock('../CollapseBtnContext', () => ({
    useCollapse: jest.fn(),
}));

describe('CollapseBtn Component', () => {
    const mockToggleCollapse = jest.fn();

    beforeEach(() => {
        (useCollapse as jest.Mock).mockReturnValue({
            collapsed: false,
            toggleCollapse: mockToggleCollapse,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render the button', () => {
        render(<CollapseBtn />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should apply the collapsed class when collapsed', () => {
        (useCollapse as jest.Mock).mockReturnValue({
            collapsed: true,
            toggleCollapse: mockToggleCollapse,
        });
        const { container } = render(<CollapseBtn />);
        expect(container.firstChild).toHaveClass('collapsed');
    });

    it('should not apply the collapsed class when not collapsed', () => {
        (useCollapse as jest.Mock).mockReturnValue({
            collapsed: false,
            toggleCollapse: mockToggleCollapse,
        });
        const { container } = render(<CollapseBtn />);
        expect(container.firstChild).not.toHaveClass('collapsed');
    });

    it('should handle click events', () => {
        render(<CollapseBtn />);
        fireEvent.click(screen.getByRole('button'));
        expect(mockToggleCollapse).toHaveBeenCalledTimes(1);
    });

    it('should apply the provided className', () => {
        const className = 'custom-class';
        const { container } = render(<CollapseBtn className={className} />);
        expect(container.firstChild).toHaveClass(className);
    });
});
