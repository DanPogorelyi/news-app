import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = {
    scroll: {},
};

export const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string, position: number}>) => {
            const { path, position } = action.payload;

            state.scroll[path] = position;
        },
    },
});

export const {
    actions: uiActions,
    reducer: uiReducer,
} = UISlice;
