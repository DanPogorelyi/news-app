import { RouteObject } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

const enum AppRoutes {
    MAIN= 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteObject[] = [
    {
        path: routePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    {
        path: routePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    {
        path: routePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
];
