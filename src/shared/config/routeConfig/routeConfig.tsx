import { RouteObject } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ProtectedRoute } from 'app/providers/Router/ui/ProtectedRoute';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

const enum AppRoutes {
    MAIN= 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    NOT_FOUND = 'not_found'
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/:id',
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
        element: (
            <ProtectedRoute>
                <ProfilePage />
            </ProtectedRoute>
        ),
    },
    {
        path: routePath[AppRoutes.ARTICLES],
        element: (
            <ProtectedRoute>
                <ArticlesPage />
            </ProtectedRoute>
        ),
    },
    {
        path: routePath[AppRoutes.ARTICLE_DETAILS],
        element: (
            <ProtectedRoute>
                <ArticleDetailsPage />
            </ProtectedRoute>
        ),
    },
    {
        path: routePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
];
