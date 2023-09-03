import {
    Article,
    ArticleSortField,
    ArticleView,
    ArticleType,
} from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
    // pagination:
    page: number;
    limit: number;
    hasMore: boolean;
    _initialized: boolean;
    // filters
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType
}
