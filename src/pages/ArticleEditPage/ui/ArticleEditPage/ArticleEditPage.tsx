import { useParams } from 'react-router-dom';

import { classNames } from 'shared/libs';

import { Page } from 'shared/ui/Page';

type Props = {
    className?: string;
}

const ArticleEditPage = ({ className }: Props) => {
    const { id } = useParams<{id: string}>();

    const isEdit = Boolean(id);

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? 'ArticleEditPage' : 'ArticleCreatePage'}
        </Page>
    );
};

export default ArticleEditPage;
