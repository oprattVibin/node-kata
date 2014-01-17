// Install mocha
// npm install -g mocha
// Install chai
// npm install chai
// To run just tpye mocha on the terminal

var should = require('chai').should();

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      var array = [1, 2, 3];
      array.indexOf(5).should.equal(-1);
      array.should.have.length(3);
      array.indexOf(3).should.equal(2);
      array[0].should.be.a('Number');
    });
  });
});

