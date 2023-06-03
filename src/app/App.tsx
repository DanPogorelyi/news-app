import React, { Suspense } from 'react';

import { AppRouter } from 'app/providers/Router';
import { classNames } from 'shared/libs';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback={<div>Loading translate...</div>}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);
