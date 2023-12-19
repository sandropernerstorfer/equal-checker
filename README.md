<h1>equal-checker</h1>
<p>
  <a href="https://www.npmjs.com/package/equal-checker" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/equal-checker.svg">
  </a>
  <a href="https://github.com/sandropernerstorfer/equal-checker#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>
<p>
  Lightweight function to check if two objects, arrays, or standalone values are equal.<br>
  Utilizes recursion to check any level of nesting.
</p>

## Install

```sh
npm install equal-checker
```

## Usage

```sh
const equalChecker = require('equal-checker');

let objectOne = {
    name : 'foo',
    note : 'bar',
    object: {a: 1, b: [1, {diff: 2}]},      // 2 as int
    array : [1, 2, 3],
};

let objectTwo = {
    name : 'foo',
    note : 'bar',
    object: {a: 1, b: [1, {diff: '2'}]},    // 2 as string
    array : [1, 2, 3]
};


let result;
// Type checking OFF
result = equalChecker(objectOne, objectTwo);
console.log(result);   // true

// Type checking ON
result = equalChecker(objectOne, objectTwo, true);
console.log(result);   // false

// Error-Message ON
result = equalChecker(objectOne, objectTwo, true , true);
console.log(result);   // [ false , '2 and 2 : different values or types'];

```

## Infos
The ```equalChecker()``` function takes 4 arguments:
* Value 1
* Value 2
* Boolean for type checking  (optional - default = false)
* Boolean for error messages (optional - default = false)
---
##### If third argument (typeCheck) is set to true:
* will compare values AND data type.
##### If fourth argument (errMsg) is set to true & the check returns false:
* will, instead of returning only a boolean, return an Array.
* the array will contain [0] the false boolean and [1] an error message explaining the difference.
