
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
