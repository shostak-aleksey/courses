import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ReactNode, useMemo } from 'react';
import { CollapseBtnContext } from 'shared/ui/CollapseBtn/CollapseBtnContext';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import { Sidebar } from './Sidebar';

const MockCollapseProvider = ({ children, collapsed }: { children: ReactNode, collapsed: boolean }) => {
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
        <Router>
            <MockCollapseProvider collapsed={collapsed}>
                <Sidebar />
            </MockCollapseProvider>
        </Router>,
    );

    it('should apply the collapsed class when collapsed', () => {
        renderWithProvider(true);
        const sidebarElement = screen.getByTestId('sidebar');
        expect(sidebarElement).toHaveClass('collapsed');
    });

    it('should not apply the collapsed class when not collapsed', () => {
        renderWithProvider(false);
        const sidebarElement = screen.getByTestId('sidebar');
        expect(sidebarElement).not.toHaveClass('collapsed');
    });

    it('should apply the provided className', () => {
        const className = 'custom-class';
        render(
            <Router>
                <MockCollapseProvider collapsed={false}>
                    <Sidebar className={className} />
                </MockCollapseProvider>
            </Router>,
        );
        const sidebarElement = screen.getByTestId('sidebar');
        expect(sidebarElement).toHaveClass(className);
    });
});
