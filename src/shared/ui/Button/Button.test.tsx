import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button, ThemeButton } from './Button';

describe('Button Component', () => {
    it('should render the button with children', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('should apply the provided className', () => {
        render(<Button className="custom-class">Click Me</Button>);
        expect(screen.getByText('Click Me')).toHaveClass('custom-class');
    });

    it('should apply the theme class', () => {
        render(<Button theme={ThemeButton.CLEAR}>Click Me</Button>);
        expect(screen.getByText('Click Me')).toHaveClass('clear');
    });

    it('should handle click events', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should spread additional props to the button element', () => {
        render(<Button data-testid="button" aria-label="button">Click Me</Button>);
        const button = screen.getByTestId('button');
        expect(button).toHaveAttribute('aria-label', 'button');
    });
});
