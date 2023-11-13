import { classNames } from 'shared/libs';

import { Page } from 'shared/ui/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { className } = props;

    return (
        <Page className={classNames('', {}, [className])}>
            777
        </Page>
    );
};

export default AdminPanelPage;
