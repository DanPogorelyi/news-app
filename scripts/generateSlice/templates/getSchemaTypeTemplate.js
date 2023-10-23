const capitalizeFirstLetter = require('../capitalizeFirstLetter');

const getSchemaTypeTemplate = (sliceName) => `export interface ${capitalizeFirstLetter(sliceName)}Schema {
    
}`;

module.exports = getSchemaTypeTemplate;
