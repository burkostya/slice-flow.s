var slice   = require('../lib/slice-stream.js');
var numbers = require('stream-spectrum/readable/number');
var inspect = require('inspect-stream');

var lastOne   = slice(-1);
var firstFive = slice([0, 5]);

numbers({ from: 1, to: 8 })
  .pipe(lastOne)
  .pipe(inspect());

numbers({ from: 10, to: 20 })
  .pipe(firstFive)
  .pipe(inspect());
