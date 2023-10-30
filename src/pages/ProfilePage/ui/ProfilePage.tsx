import { classNames } from 'shared/libs';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { VStack } from 'shared/ui/Stack';

type Props = {
    className?: string;
}

const ProfilePage = ({ className }: Props) => {
    const { id } = useParams();

    if (!id) {
        return null;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
