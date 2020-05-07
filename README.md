# random-integer

[![Build Status](https://travis-ci.org/wafuwafu13/random-integer.svg?branch=master)](https://travis-ci.org/wafuwafu13/random-integer)

This is a program for generating a random integer by specifying a range

## Use examples

First, install this module in your project.
```
$ npm install random-integer
```
Import this module in your source code and call like below.

```javascript
let RandomInteger = require('random-integer')
let ri = new RandomInteger()

console.log(ri.create(1, 10));  // -> 1 or 2 or ... or 10
console.log(ri.create(-10, 0)); // -> -10 or -9 or ... or 0
console.log(ri.create(1, 1));   // -> 1
```

# Testing

rpncc uses jest for testing. You can run test cases by installing dependencies then run "npm test" command.
```
$ npm install
$ npm test
```

# License

This software is released under the MIT License, see LICENSE.txt.
