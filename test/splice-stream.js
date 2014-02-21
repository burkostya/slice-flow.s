var expect = require('chai').expect;

var stream = require('../lib/splice-stream');

describe('splice-stream', function () {
  it('should stream', function (done) {
    var results = [];
    var instance = stream();
    instance.on('readable', function () {
      var item;
      while ((item = instance.read()) !== null) {
        results.push(item);
      }
    });
    instance.on('end', function () {
      expect(results).to.have.length(1);
      done();
    });
    instance.write('some');
    instance.end();
  });
});