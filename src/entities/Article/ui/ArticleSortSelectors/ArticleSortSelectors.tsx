import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/libs';
import { Select, type SelectOption } from 'shared/ui/Select';

import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelectors.module.scss';

type Props = {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (sort: ArticleSortField) => void;
    onChangeOrder: (order: SortOrder) => void;
}

export const ArticleSortSelectors = ({
    className,
    sort,
    order,
    onChangeSort,
    onChangeOrder,
}: Props) => {
    const { t } = useTranslation('article');

    const sortFieldOptions: SelectOption<ArticleSortField>[] = useMemo(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('SORT_BY_DATE'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('SORT_BY_TITLE'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('SORT_BY_VIEWS'),
        },
    ], [t]);

    const orderOptions: SelectOption<SortOrder>[] = useMemo(() => [
        {
            value: 'asc',
            content: t('SORT_ASC'),
        },
        {
            value: 'desc',
            content: t('SORT_DESC'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelectors, {}, [className])}>
            <Select
                value={sort}
                label={t('SORT_BY')}
                options={sortFieldOptions}
                onChange={onChangeSort}
            />
            <Select
                value={order}
                label={t('ORDER')}
                options={orderOptions}
                onChange={onChangeOrder}
            />
        </div>
    );
};
