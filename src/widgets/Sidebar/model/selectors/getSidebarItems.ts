import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20x20.svg';
import AboutIcon from 'shared/assets/icons/about-20x20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20x20.svg';
import ArticleIcon from 'shared/assets/icons/article-20x20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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

        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: routePath.profile + userData.id,
                    text: 'PROFILE_PAGE',
                    Icon: ProfileIcon,
                    isAuthOnly: true,
                },
                {
                    path: routePath.articles,
                    text: 'ARTICLES_PAGE',
                    Icon: ArticleIcon,
                    isAuthOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
