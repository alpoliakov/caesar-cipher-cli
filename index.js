const {dataTransform} = require('./modules/transform_data');
const {getOutput, getInput, validateArguments} = require('./modules/arguments');

validateArguments();
dataTransform(getInput(), getOutput());
