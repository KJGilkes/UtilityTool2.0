const color = require('colors');

exports.debug = (msg, status) => {
  const seperator = '\n=============================\n';
  if (process.env.DEBUG) {
    const coloredmsg = color.green(msg);
    const errormsg = color.yellow(msg);
    if (status === undefined) {
      /* eslint-disable */
      console.log(coloredmsg + seperator);
    } else if (status === 444) {
      console.error(errormsg + seperator);
    } else {
      console.warn(coloredmsg, status + seperator);
      /* eslint-enable */
    }
  }
};

exports.versionNum = (parm1, parm2) => {
  // makes sure parm2 is lower case
  const parmCase = parm2.toLowerCase();
  // spilts parm one to seperate each number
  let splitNum = parm1.split('.');

  // if parm1 is greater than 3 or less than one return an error
  if (splitNum.length > 3 || splitNum.length < 1) {
    return 'error';
  }

  // checks number
  function checkIfNumber(num) {
    if (Number(num) === 0) {
      return true;
    }
    if (!Number(num)) {
      return false;
    }
    return true;
  }

  for (let i = 0; i < splitNum.length; i++) {
    if (!checkIfNumber(splitNum[i])) {
      return 'error';
    }
  }

  splitNum = splitNum.map(Number);
  // increments major number
  if (parmCase === 'major') {
    splitNum[0]++;
    for (let i = 1; i < splitNum.length; i++) {
      splitNum[i] = 0;
    }
      // increments minor number
  } else if (parmCase === 'minor') {
    if (splitNum.length === 1) {
      splitNum.push(0);
    }
    splitNum[1]++;
    for (let i = 2; i < splitNum.length; i++) {
      splitNum[i] = 0;
    }
      // increments patch number
  } else if (parmCase === 'patch') {
    if (splitNum.length === 2) {
      splitNum.push(0);
    }
    splitNum[2]++;
  } else {
    return 'error';
  }

  // joins verison number
  return splitNum.join('.');
};
