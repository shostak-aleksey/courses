// File: src/widgets/Sidebar/ui/Sidebar/Sidebar.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ReactNode, useMemo } from 'react';
import { CollapseBtnContext } from 'shared/ui/CollapseBtn/CollapseBtnContext';
import { Sidebar } from './Sidebar';

const MockCollapseProvider = (
    { children, collapsed }: { children: ReactNode, collapsed: boolean },
) => {
    const value = useMemo(() => ({
        collapsed,
        toggleCollapse: jest.fn(),
    }), [collapsed]);

    return (
        <CollapseBtnContext.Provider value={value}>
            {children}
        </CollapseBtnContext.Provider>
    );
};

describe('Sidebar Component', () => {
    const renderWithProvider = (collapsed = false) => render(
        <MockCollapseProvider collapsed={collapsed}>
            <Sidebar />
        </MockCollapseProvider>,
    );

    it('should render the Sidebar with ThemeSwitcher', () => {
        renderWithProvider();
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should apply the collapsed class when collapsed', () => {
        const { container } = renderWithProvider(true);
        expect(container.firstChild).toHaveClass('collapsed');
    });

    it('should not apply the collapsed class when not collapsed', () => {
        const { container } = renderWithProvider(false);
        expect(container.firstChild).not.toHaveClass('collapsed');
    });

    it('should apply the provided className', () => {
        const className = 'custom-class';
        const { container } = render(
            <MockCollapseProvider collapsed={false}>
                <Sidebar className={className} />
            </MockCollapseProvider>,
        );
        expect(container.firstChild).toHaveClass(className);
    });
});
