import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersMap,
    DynamicModuleLoader,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';

type Props = {
    className?: string;
    onSendComment: (text: string) => void;
}

const initialReducers: ReducersMap = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: Props) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);

    const handleInputChange = (value: string) => {
        dispatch(addCommentFormActions.setText(value));
    };

    const handleSendComment = () => {
        onSendComment(text || '');
        handleInputChange('');
    };

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    value={text}
                    placeholder={t('ENTER_COMMENT')}
                    className={cls.input}
                    onChange={handleInputChange}
                />
                <Button onClick={handleSendComment}>{t('SUBMIT_FORM')}</Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
