import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import { Text, TextSize } from 'shared/ui/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useGetArticleRecommendationsQuery } from '../../api/ArticleRecommendationsApi';

interface ArticleRecommendationsProps {
    className?: string;
}

export const ArticleRecommendations = memo((props: ArticleRecommendationsProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { data, isLoading, error } = useGetArticleRecommendationsQuery(3);

    if (isLoading || error || !data) {
        return null;
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('RECOMMENDATIONS')}
            />
            <ArticleList
                target="_blank"
                articles={data}
            />
        </VStack>
    );
});

ArticleRecommendations.displayName = 'ArticleRecommendations';
