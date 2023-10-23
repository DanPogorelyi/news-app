const capitalizeFirstLetter = require('../capitalizeFirstLetter');

const getReduxSliceTemplate = (sliceName) => {
    const typeName = `${capitalizeFirstLetter(sliceName)}Schema`;

    return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${typeName} } from '../types/${sliceName}Schema';

const initialState: ${typeName} = {};

export const ${sliceName}Slice = createSlice({
    name: '${sliceName}',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const {
    actions: ${sliceName}Actions,
    reducer: ${sliceName}Reducer,
} = ${sliceName}Slice;
`;
};

module.exports = getReduxSliceTemplate;
