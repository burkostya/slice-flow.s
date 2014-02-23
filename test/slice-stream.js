var expect = require('chai').expect;

var stream = require('../lib/slice-stream');

describe('slice-stream', function () {
  it('should slice when bounds are positive', function (done) {
    var results = [];
    var instance = stream([2, 6]);
    instance.on('readable', function () {
      var item;
      while ((item = instance.read()) !== null) {
        results.push(item);
      }
    });
    instance.on('end', function () {
      expect(results).to.have.length(4);
      expect(results[0]).to.equal(3);
      expect(results[3]).to.equal(6);
      done();
    });
    instance.write(1);
    instance.write(2);
    instance.write(3);
    instance.write(4);
    instance.write(5);
    instance.write(6);
    instance.write(7);
    instance.end();
  });
  it('should slice when start is positive and end is negative', function (done) {
    var results = [];
    var instance = stream([2, -2]);
    instance.on('readable', function () {
      var item;
      while ((item = instance.read()) !== null) {
        results.push(item);
      }
    });
    instance.on('end', function () {
      expect(results).to.have.length(3);
      expect(results[0]).to.equal(3);
      expect(results[2]).to.equal(5);
      done();
    });
    instance.write(1);
    instance.write(2);
    instance.write(3);
    instance.write(4);
    instance.write(5);
    instance.write(6);
    instance.write(7);
    instance.end();
  });
  it('should slice when start is negative and end is negative', function (done) {
    var results = [];
    var instance = stream([-5, -2]);
    instance.on('readable', function () {
      var item;
      while ((item = instance.read()) !== null) {
        results.push(item);
      }
    });
    instance.on('end', function () {
      expect(results).to.have.length(3);
      expect(results[0]).to.equal(3);
      expect(results[2]).to.equal(5);
      done();
    });
    instance.write(1);
    instance.write(2);
    instance.write(3);
    instance.write(4);
    instance.write(5);
    instance.write(6);
    instance.write(7);
    instance.end();
  });
  it('should slice when start is positive', function (done) {
    var results = [];
    var instance = stream(3);
    instance.on('readable', function () {
      var item;
      while ((item = instance.read()) !== null) {
        results.push(item);
      }
    });
    instance.on('end', function () {
      expect(results).to.have.length(4);
      expect(results[0]).to.equal(4);
      expect(results[3]).to.equal(7);
      done();
    });
    instance.write(1);
    instance.write(2);
    instance.write(3);
    instance.write(4);
    instance.write(5);
    instance.write(6);
    instance.write(7);
    instance.end();
  });
  it('should slice when start is negative', function (done) {
    var results = [];
    var instance = stream(-3);
    instance.on('readable', function () {
      var item;
      while ((item = instance.read()) !== null) {
        results.push(item);
      }
    });
    instance.on('end', function () {
      expect(results).to.have.length(3);
      expect(results[0]).to.equal(5);
      expect(results[2]).to.equal(7);
      done();
    });
    instance.write(1);
    instance.write(2);
    instance.write(3);
    instance.write(4);
    instance.write(5);
    instance.write(6);
    instance.write(7);
    instance.end();
  });});
