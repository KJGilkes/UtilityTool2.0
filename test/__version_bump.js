const bump = require('../src/server');
const expect = require('chai').expect;

// Unit test for version bumping
describe('VERSION BUMP TEST: ', () => {
  it('should test the MAJOR bump', (done) => {
    const tag = 'major';
    const currentV = '1.0.0';
    const bumpit = bump.bumpit(currentV, tag);

    expect(bumpit).to.be.a('String');
    done();
  });

  it('should test the MINOR bump', (done) => {
    const currentV = '0.0.0';
    const tag = 'minor';
    const bumpit = bump.bumpit(currentV, tag);

    expect(bumpit).to.be.a('String');
    done();
  });

  it('should test the PATCH bump', (done) => {
    const currentV = '0.0.0';
    const tag = 'patch';
    const bumpit = bump.bumpit(currentV, tag);

    expect(bumpit).to.be.a('String');
    done();
  });
});
