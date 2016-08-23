
const color = require('colors');

exports.debug = (msg, status) => {
  const seperator = '\n=============================\n';
  if (process.env.DEBUG) {
    const coloredmsg = color.green(msg);
    const errormsg = color.red(msg);
    if (status === undefined) {
      console.log(coloredmsg + seperator);
    } else if (status === 444) {
      console.log(errormsg + seperator);
    } else {
      console.log(coloredmsg, status + seperator);
    }
  }
};

/**
* @function log() will output to console.log()
* @param {String} msg
* @return {String} status
*/
exports.log = (msg, status) => {
  const seperator = '\n=============================\n';
  if (process.env.DEBUG) {
    const coloredMsg = color.green(msg);
    if (status === undefined) {
      console.log(coloredMsg + seperator);
    } else if (status === 444) {
      console.log(coloredMsg + seperator);
    } else {
      console.log(coloredMsg, status + seperator);
    }
  }
};

/**
* @function warn() will output to console.warn()
* @param {String} msg
* @return {String} status
*/
exports.warn = (msg, status) => {
  const seperator = '\n=============================\n';
  if (process.env.DEBUG) {
    const warnMsg = color.yellow(msg);
    if (status === undefined) {
      console.log(warnMsg + seperator);
    } else if (status === 444) {
      console.log(warnMsg + seperator);
    } else {
      console.warn(warnMsg, status + seperator);
    }
  }
};

/**
* @function error() will output to console.error()
* @param {String} msg
* @return {String} status
*/
exports.error = (msg, status) => {
  const seperator = '\n=============================\n';
  if (process.env.DEBUG) {
    const errorMsg = color.red(msg);
    if (status === undefined) {
      console.log(errorMsg + seperator);
    } else if (status === 444) {
      console.log(errorMsg + seperator);
    } else {
      console.error(errorMsg, status + seperator);
    }
  }
};
