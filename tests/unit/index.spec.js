const {expect} = require('chai');

const rounded = require('./../../index');

describe('rounded', function () {
  it('should return 15.67', function () {
    expect(rounded(15.6733333333333333333333333333333333333, 2)).to.equal(15.67);
  });

  it('should return 15.67', function () {
    expect(rounded(15.66666666666, 2)).to.equal(15.67);
  });
});
