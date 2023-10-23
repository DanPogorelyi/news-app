const generateTemplate = require('./templates/generateTemplate');

const layerName = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layerName || !layers.includes(layerName)) {
    throw new Error('You must specify a valid layer name: features, entities or pages');
}

if (!sliceName) {
    throw new Error('You must specify a slice name');
}

generateTemplate(layerName, sliceName);
