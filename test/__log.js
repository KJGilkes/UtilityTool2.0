const fs = require('fs');
const utility = require('../src/server.js');
const sinon = require('sinon');
require('mocha-sinon')
const expect = require('chai').expect;

describe('Console log', () => {
  it('Should be able to console log', (done) => {
    let logger = sinon.spy();
    logger(utility.debug('Logging'));
    expect(logger.callCount).to.equal(1);
    done();
  });

  it('Should be able to console error', (done) => {
    let logger = sinon.spy();
    logger(utility.error('Logging'));
    expect(logger.callCount).to.equal(1);
    done();
  });

  it('Should be able to console warn', (done) => {
    let logger = sinon.spy();
    logger(utility.warn('Logging'));
    expect(logger.callCount).to.equal(1);
    done();
  });

  it('Should be able to console log with debug()', (done) => {
    let logger = sinon.spy();
    logger(utility.log('Logging'));
    expect(logger.callCount).to.equal(1);
    done();
  });

  it('Should be able to append to a file', (done) => {
      let append = sinon.spy();
      append(fs.appendFile('logs/output.log', "Test output", () => {}));
      expect(append.callCount).to.equal(1);
      done();
    });
  });
