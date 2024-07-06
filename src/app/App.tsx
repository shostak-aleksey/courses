import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

function App() {
    const { theme } = useTheme();
    return (
        <div className={` ${classNames('app', { 'some-class': false }, [theme])}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
export default App;
