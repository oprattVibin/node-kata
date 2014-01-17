// Install mocha
// npm install -g mocha
// Install chai
// npm install chai
// To run just tpye mocha on the terminal

var should = require('chai').should();

describe('Array', function() {
  before(function() {
    var array = [1, 2, 3];
  });
  
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      array.indexOf(5).should.equal(-1);
    });
  });
  
  describe('#length', fucntion() {
    it('should return the exact length of elements', function() {
      array.should.have.length(3);
    });
  });
  
  describe('type of element', function() {
    it('should have elements that are numbers', function() {
      array[0].should.be.a('Number');
    });
  });
});

