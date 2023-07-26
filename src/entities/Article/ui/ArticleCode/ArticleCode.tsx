import { classNames } from 'shared/libs';

import { memo } from 'react';
import { Code } from 'shared/ui/Code';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import cls from './ArticleCode.module.scss';

type Props = {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCode = memo(({ className, block }: Props) => (
    <div className={classNames(cls.ArticleCode, {}, [className])}>
        <Code text={block.code} />
    </div>
));

ArticleCode.displayName = 'ArticleCode';
