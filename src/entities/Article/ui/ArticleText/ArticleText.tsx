import { memo } from 'react';
import { classNames } from 'shared/libs';

import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text';
import cls from './ArticleText.module.scss';

type Props = {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleText = memo(({ className, block }: Props) => (
    <div className={classNames(cls.ArticleText, {}, [className])}>
        {block.title && (
            <Text title={block.title} className={cls.title} />
        )}
        {block.paragraphs.map((paragraph) => (
            <Text
                key={paragraph}
                text={paragraph}
                className={cls.paragraph}
            />
        ))}
    </div>
));

ArticleText.displayName = 'ArticleText';
