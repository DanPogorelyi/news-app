import {RouteObject } from "react-router-dom";
import MainPage from "pages/MainPage/ui/MainPage";
import {AboutPage} from "pages/AboutPage";

const enum AppRoutes {
    MAIN= 'main',
    ABOUT = 'about'
}

const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: RouteObject[] = [
    {
        path: routePath[AppRoutes.MAIN],
        element: <MainPage />
    },
    {
        path: routePath[AppRoutes.ABOUT],
        element: <AboutPage />
    }
]
