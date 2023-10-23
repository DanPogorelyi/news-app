const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const capitalizeFirstLetter = require('../capitalizeFirstLetter');
const getComponentTemplate = require('./getComponentTemplate');
const getStoryTemplate = require('./getStoryTemplate');
const getStyleTemplate = require('./getStyleTemplate');

async function generateUI(layer, sliceName) {
    const resolvePath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

    const generateUIStructure = async () => {
        try {
            await fs.mkdir(resolvePath());
        } catch (e) {
            console.log('generateUIDir error', e);
        }
    };

    const generateComponent = async () => {
        try {
            const componentName = capitalizeFirstLetter(sliceName);

            await fs.mkdir(resolvePath(componentName));
            await fs.writeFile(
                resolvePath(componentName, `${componentName}.tsx`),
                getComponentTemplate(componentName),
            );
            await fs.writeFile(
                resolvePath(componentName, `${componentName}.stories.tsx`),
                getStoryTemplate(layer, componentName),
            );
            await fs.writeFile(
                resolvePath(componentName, `${componentName}.module.scss`),
                getStyleTemplate(componentName),
            );
        } catch (e) {
            console.log('generateComponent error', e);
        }
    };

    await generateUIStructure();
    await generateComponent();
}

module.exports = generateUI;
