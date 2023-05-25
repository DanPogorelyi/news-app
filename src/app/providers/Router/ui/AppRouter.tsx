import { Suspense } from 'react';
import {useRoutes } from 'react-router-dom';
import {routeConfig} from "shared/config";

export const AppRouter = () => {
    const element = useRoutes(routeConfig);

    return (
        <Suspense fallback={<div>Loading</div>}>
            <div className="page-wrapper">
                {element}
            </div>
        </Suspense>
    );
};
