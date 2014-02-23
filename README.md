# slice-stream

Stream for slicing flow of packets

## Installation

`npm install slice-flow.s`

## Example

```js
var slice   = require('slice-flow.s');
var numbers = require('stream-spectrum/readable/number');
var inspect = require('inspect-stream');

var lastOne   = slice(-1);
var firstFive = slice([0, 5]);

numbers({ from: 1, to: 8 })
  .pipe(lastOne) // outputs 8
  .pipe(inspect());

numbers({ from: 10, to: 20 })
  .pipe(firstFive) // outputs 10, 11, 12, 13, 14
  .pipe(inspect());
```

## Usage

`var stream = require('slice-flow.s')`

## API

