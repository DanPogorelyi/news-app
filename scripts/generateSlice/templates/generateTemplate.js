const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const generateUI = require('./generateUI');
const generateModel = require('./generateModel');
const generatePublicApi = require('./generatePublicApi');

async function generateTemplate(layer, sliceName) {
    try {
        await fs.mkdir(resolveRoot('src', layer, sliceName));
    } catch (e) {
        console.error('error', e);
    }

    await generateUI(layer, sliceName);
    await generateModel(layer, sliceName);
    await generatePublicApi(layer, sliceName);
}

module.exports = generateTemplate;
