import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import { Tab, Tabs } from 'shared/ui/Tabs';
import { useCallback, useMemo } from 'react';
import { ArticleType } from '../../model/types/article';

type Props = {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = ({ className, value, onChangeType }: Props) => {
    const { t } = useTranslation('article');

    const handleChangeType = useCallback((tab: Tab) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    const tabs: Tab[] = useMemo(() => [
        {
            value: ArticleType.ALL,
            content: t('ALL'),
        },
        {
            value: ArticleType.IT,
            content: t('IT'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('SCIENCE'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('ECONOMICS'),
        },
    ], [t]);

    return (
        <Tabs
            tabs={tabs}
            value={value}
            className={classNames('', {}, [className])}
            onClick={handleChangeType}
        />
    );
};
