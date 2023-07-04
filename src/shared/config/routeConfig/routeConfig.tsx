import { RouteObject } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

const enum AppRoutes {
    MAIN= 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
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
        path: routePath[AppRoutes.PROFILE],
        element: <ProfilePage />,
    },
    {
        path: routePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
];
