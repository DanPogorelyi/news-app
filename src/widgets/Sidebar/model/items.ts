import React from 'react';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20x20.svg';
import AboutIcon from 'shared/assets/icons/about-20x20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20x20.svg';

export type SidebarItemType = {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: routePath.main,
        text: 'MAIN_PAGE',
        Icon: MainIcon,
    },
    {
        path: routePath.about,
        text: 'ABOUT_PAGE',
        Icon: AboutIcon,
    },
    {
        path: routePath.profile,
        text: 'PROFILE_PAGE',
        Icon: ProfileIcon,
    },
];
