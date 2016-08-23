
const color = require('colors');

exports.debug = (msg, status) => {
  const seperator = '\n=============================\n';
  if (process.env.DEBUG) {
    const coloredmsg = color.green(msg);
    const warnmsg = color.yellow(msg);
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
* @param {Object} obj
* @param {Variable} level
* @return {String} message
*/
exports.log = (msg, status) => {
  const seperator = '\n=============================\n';
  if (process.env.DEBUG) {
    const coloredmsg = color.green(msg);
    const warnmsg = color.yellow(msg);
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
* @function warn() will output to console.warn()
* @param {String} msg
* @param {Object} obj
* @param {Variable} level
* @return {String} message
*/
exports.warn = (msg, status) => {
  const seperator = '\n=============================\n';
  if (process.env.DEBUG) {
    const coloredmsg = color.green(msg);
    const warnmsg = color.yellow(msg);
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
* @function error() will output to console.error()
* @param {String} msg
* @param {Object} obj
* @param {Variable} level
* @return {String} message
*/
exports.error = (msg, status) => {
  const seperator = '\n=============================\n';
  if (process.env.DEBUG) {
    const coloredmsg = color.green(msg);
    const warnmsg = color.yellow(msg);
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
