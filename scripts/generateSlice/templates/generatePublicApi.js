const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const capitalizeFirstLetter = require('../capitalizeFirstLetter');

const getPublicApiTemplate = (
    componentName,
    schemaName,
) => `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${capitalizeFirstLetter(schemaName)} } from './model/types/${schemaName}';
`;

async function generatePublicApi(layer, sliceName) {
    const componentName = capitalizeFirstLetter(sliceName);
    const schemaName = `${sliceName}Schema`;

    try {
        await fs.writeFile(
            resolveRoot('src', layer, sliceName, 'index.ts'),
            getPublicApiTemplate(componentName, schemaName),
        );
    } catch (e) {
        console.log('Не удалось создать PUBLIC API');
    }
}

module.exports = generatePublicApi;
