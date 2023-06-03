import React, { Suspense } from 'react';

import { AppRouter } from 'app/providers/Router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/libs';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading translate...</div>}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
