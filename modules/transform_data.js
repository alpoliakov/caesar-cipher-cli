const fs = require('fs');
const {pipeline} = require('stream');
const {transformation} = require('./transform_stream');

const dataTransform = (input, output) => {
  let incomingData;
  if(input) {
    incomingData = fs.createReadStream(input);
  }else {
    incomingData = process.stdin;
  }
  let outgoingData;
  if(output) {
    outgoingData = fs.createWriteStream(output, {flags: 'a'})
  }else {
    outgoingData = process.stdout;
  }

  pipeline(incomingData, transformation, outgoingData, err => {
    if(err) {
      process.stderr.write(err.message + '\n');
      process.exit(1);
    }
  })
}

module.exports = {
  dataTransform,
}
