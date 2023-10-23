const fs = require('fs/promises');

const resolveRoot = require('../resolveRoot');
const getReduxSliceTemplate = require('./getReduxSliceTemplate');
const getSchemaTypeTemplate = require('./getSchemaTypeTemplate');

async function generateModel(layer, sliceName) {
    const resolvePath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments);

    const generateModelStructure = async () => {
        try {
            await fs.mkdir(resolvePath());
            await fs.mkdir(resolvePath('types'));
            await fs.mkdir(resolvePath('services'));
            await fs.mkdir(resolvePath('slices'));
            await fs.mkdir(resolvePath('selectors'));
        } catch (e) {
            console.log('generateModelStructure error', e);
        }
    };

    const generateReduxSlice = async () => {
        try {
            await fs.writeFile(
                resolvePath('slices', `${sliceName}Slice.ts`),
                getReduxSliceTemplate(sliceName),
            );
        } catch (e) {
            console.log('generateReduxSlice error', e);
        }
    };

    const generateSchemaType = async () => {
        try {
            await fs.writeFile(
                resolvePath('types', `${sliceName}Schema.ts`),
                getSchemaTypeTemplate(sliceName),
            );
        } catch (e) {
            console.log('generateSchemaType error', e);
        }
    };

    await generateModelStructure();
    await generateReduxSlice();
    await generateSchemaType();
}

module.exports = generateModel;
