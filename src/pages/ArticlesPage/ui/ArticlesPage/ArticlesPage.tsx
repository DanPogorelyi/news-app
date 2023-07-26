import { classNames } from 'shared/libs';

import cls from './ArticlesPage.module.scss';

type Props = {
    className?: string;
}

const ArticlesPage = ({ className }: Props) => (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
        1
    </div>
);

export default ArticlesPage;
