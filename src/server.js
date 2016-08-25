
const fs = require('fs');
const color = require('colors');

exports.debug = (msg, status) => {
  const seperator = '\n=============================\n';
  if (process.env.DEBUG) {
    const coloredmsg = color.green(msg);
    const errormsg = color.yellow(msg);
    if (status === undefined) {
      /* eslint-disable */
      console.log(coloredmsg + seperator);
      fs.appendFile('logs/output.log', msg, () => {
      });
    } else if (status === 444) {
      console.log(errormsg + seperator);
      fs.appendFile('logs/output.log', msg, () => {
      });
    } else {
      console.log(coloredmsg, status + seperator);
      /* eslint-enable */
      fs.appendFile('logs/output.log', msg, () => {
      });
    }
  }
};

exports.bumpit = (currentV, tag) => {
  const tagComp = tag.toUpperCase();

  // Format version string into an array
  const updateV = currentV.split('.');

  // Make sure version string is only numbers
  if (currentV.match(/^[a-z]+$/)) {
    throw error;
  } else {
    // Check tag strings for semver versioning Vmajor.minor.patch
    if (tagComp === 'MAJOR') {
      // v+MAJOR.0.0
      updateV[0]++;

      // Reset other semver values to '0'
      updateV[1] = 0;
      updateV[2] = 0;

      return updateV.join('.');
    } else if (tagComp === 'MINOR') {
      // v0.+MINOR.0
      updateV[1]++;

      // Reset other semver values to '0'
      updateV[0] = 0;
      updateV[2] = 0;

      return updateV.join('.');
    } else if (tagComp === 'PATCH') {
      // v0.0.+PATCH
      updateV[2]++;

      // Reset other semver values to '0'
      updateV[0] = 0;
      updateV[1] = 0;

      return updateV.join('.');
    }
  }
};
