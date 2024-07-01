import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { ThemeProvider } from './app/provider/ThemeProvider';
import { CollapseProvider } from './shared/ui/CollapseBtn/CollapseBtnContext';
import { ErrorBoundary } from './app/provider/ErrorBoundary';

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
