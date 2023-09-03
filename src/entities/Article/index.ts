export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';
export { ArticleSortSelectors } from './ui/ArticleSortSelectors/ArticleSortSelectors';
export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';

export {
    Article,
    ArticleDetailsSchema,
    ArticleView,
    ArticleSortField,
    ArticleType,
} from './model/types/article';
export { articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { getArticleDetailsData } from './model/selectors/articleDetails';
