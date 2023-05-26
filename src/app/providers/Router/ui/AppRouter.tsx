import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { routeConfig } from 'shared/config';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
    const element = useRoutes(routeConfig);

    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                {element}
            </div>
        </Suspense>
    );
};
