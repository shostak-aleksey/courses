import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { CollapseProvider } from './shared/ui/CollapseBtn/CollapseBtnContext';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <CollapseProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </CollapseProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
