const ACTION = ['a', 'action'];
const SHIFT = ['s', 'shift'];
const INPUT = ['i', 'input'];
const OUTPUT = ['o', 'output'];
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));

const errHandler = (err) => {
  if(err) {
    process.stderr.write(err.message + '\n');
    process.exit(1);
  }
}

const getAction = () => args[ACTION[0]] || args[ACTION[1]];
const getShift = () => args[SHIFT[0]] || args[SHIFT[1]];
const getInput = () => args[INPUT[0]] || args[INPUT[1]];
const getOutput = () => args[OUTPUT[0]] || args[OUTPUT[1]];

const validateArguments = () => {
  if(!getAction(args)) {
    errHandler(new Error(`missing argument: --action`))
  }
  if(!getShift(args)) {
    errHandler(new Error(`missing argument: --shift`))
  }
  let file = getInput(args);
  if (file) {
    fs.access(file, fs.constants.R_OK, err => errHandler(err));
  }
  file = getOutput(args);
  if (file) {
    fs.access(file, fs.constants.W_OK, err => errHandler(err));
  }
}

module.exports = {
  getAction,
  getShift,
  getInput,
  getOutput,
  validateArguments,
}
