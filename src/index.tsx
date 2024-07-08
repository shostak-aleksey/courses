import { render } from 'react-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import 'app/styles/index.scss';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { CollapseProvider } from './shared/ui/CollapseBtn/CollapseBtnContext';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <CollapseProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </CollapseProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
