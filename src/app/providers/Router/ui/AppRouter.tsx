import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { routeConfig } from 'shared/config';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
    const element = useRoutes(routeConfig);

    console.log('element', element);

    return (
        <Suspense fallback={<PageLoader />}>
            {element}
        </Suspense>
    );
};
