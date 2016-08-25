const utility = require('../src/server.js');
const sinon = require('sinon');
require('mocha-sinon');
const expect = require('chai').expect;

describe('Console log', () => {
  it('Should be able to console log', () => {
    const logger = sinon.spy();
    logger(utility.debug('Logging'));
    expect(logger.callCount).to.equal(1);
  });

  it('Should be able to console error', () => {
    const err = sinon.spy();
    err(utility.debug('Logging'));
    expect(err.callCount).to.equal(1);
  });

  it('Should be able to console warn', () => {
    const warn = sinon.spy();
    warn(utility.debug('Logging'));
    expect(warn.callCount).to.equal(1);
  });
});

// Tests verison bump
describe('Verison Bump', () => {
  const num = '1.9.0';
  let versNum;

  // Test if it increments major version bump
  it('| Will increment the major verison number', (done) => {
    versNum = utility.versionNum(num, 'major');
    expect(versNum).to.be.equal('2.0.0');
    done();
  });

  // Test if it increments minor version bump
  it('| Will increment the minor verison number', (done) => {
    versNum = utility.versionNum(num, 'minor');
    expect(versNum).to.be.equal('1.10.0');
    done();
  });

  // Test if it increments patch version bump
  it('| Will increment the patch verison numbe', (done) => {
    versNum = utility.versionNum(num, 'patch');
    expect(versNum).to.be.equal('1.9.1');
    done();
  });

  // Test to make sure verison number is in the correct format
  it('| Returns the error because version number is in wrong format', (done) => {
    versNum = utility.versionNum('1.w.3', 'patch');
    expect(versNum).to.be.equal('error');
    done();
  });
});
