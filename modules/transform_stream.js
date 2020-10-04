const stream = require('stream');
const {getAction, getShift} = require('./arguments');
const {cryptoAction} = require('./crypto');

const transformation = new stream.Transform({objectMode: true});

transformation._transform = function (chunk, encoding, done) {
  try {
    done(null, cryptoAction(chunk.toString() , getShift(), getAction()));
  }catch (err) {
    done(err);
  }
}

module.exports = {transformation};