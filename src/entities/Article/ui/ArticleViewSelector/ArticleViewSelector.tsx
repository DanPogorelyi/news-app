import { memo } from 'react';

import { classNames } from 'shared/libs';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import GridIcon from 'shared/assets/icons/grid-24-24.svg';

import { ArticleView } from 'entities/Article';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';

import cls from './ArticleViewSelector.module.scss';

type Props = {
    className?: string;
    view: ArticleView;
    onChangeView?: (view: ArticleView) => void;
}

const viewTypes = [{
    view: ArticleView.LIST,
    icon: ListIcon,
}, {
    view: ArticleView.GRID,
    icon: GridIcon,
}];

export const ArticleViewSelector = memo(({ className, view, onChangeView }: Props) => {
    const handleChangeView = (view: ArticleView) => {
        onChangeView?.(view);
    };

    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    key={viewType.view}
                    onClick={() => handleChangeView(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames(cls.icon, {
                            [cls.selected]: viewType.view === view,
                        }, [])}
                    />
                </Button>
            ))}
        </div>
    );
});

ArticleViewSelector.displayName = 'ArticleViewSelector';
