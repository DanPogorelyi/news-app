import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentFormSelectors';

describe('addCommentFormSelectors', () => {
    it('should return text', () => {
        const state = {
            addCommentForm: {
                text: 'text',
            },
        };

        expect(getAddCommentFormText(state as StateSchema)).toBe('text');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getAddCommentFormText(state as StateSchema)).toBe('');
    });
});

describe('getAddCommentFormError', () => {
    it('should return error', () => {
        const state = {
            addCommentForm: {
                error: 'error',
            },
        };

        expect(getAddCommentFormError(state as StateSchema)).toBe('error');
    });
});
