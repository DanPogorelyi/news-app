import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ArticleDetails } from 'entities/Article';

import { classNames } from 'shared/libs';

import { DynamicModuleLoader, ReducersMap } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'shared/ui/Page';

import { ArticleRecommendations } from 'features/ArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

import cls from './ArticleDetailsPage.module.scss';

type Props = {
    className?: string;
}

const initialReducers: ReducersMap = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: Props) => {
    const { t } = useTranslation('article');
    const { id } = useParams();

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('ARTICLE_NOT_FOUND')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRecommendations />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
