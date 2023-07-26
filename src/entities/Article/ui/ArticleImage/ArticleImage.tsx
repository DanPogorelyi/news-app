import { memo } from 'react';
import { classNames } from 'shared/libs';

import { Text, TextAlign } from 'shared/ui/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImage.module.scss';

type Props = {
    className?: string;
    block: ArticleImageBlock
}

export const ArticleImage = memo(({ className, block }: Props) => (
    <div className={classNames(cls.ArticleImage, {}, [className])}>
        <img
            src={block.src}
            alt={block.title}
            className={cls.img}
        />
        {block.title && (
            <Text title={block.title} align={TextAlign.CENTER} />
        )}
    </div>
));

ArticleImage.displayName = 'ArticleImage';
