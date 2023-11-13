import { memo } from 'react';

import { Page } from 'shared/ui/Page';
import { classNames } from 'shared/libs';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = memo(({ className }: ForbiddenPageProps) => (
    <Page className={classNames('', {}, [className])}>
        666
    </Page>
));

ForbiddenPage.displayName = 'ForbiddenPage';
