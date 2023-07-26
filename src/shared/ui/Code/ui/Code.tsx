import { classNames } from 'shared/libs';

import { Button, ButtonTheme } from 'shared/ui/Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

type Props = {
    className?: string;
    text: string;
}

export const Code = ({ className, text }: Props) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copy}
                theme={ButtonTheme.CLEAR}
                onClick={handleCopy}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
