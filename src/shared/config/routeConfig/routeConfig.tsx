/* eslint-disable no-unused-vars */
import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Page404 } from 'pages/Page404';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PAGE404 = 'page404',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/a',
    [AppRoutes.ABOUT]: '/AboutPage',
    [AppRoutes.PAGE404]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PAGE404]: {
        path: RoutePath.page404,
        element: <Page404 />,
    },
};
