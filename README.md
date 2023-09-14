<h1>equal-checker</h1>
<p>
  <a href="https://www.npmjs.com/package/equal-checker" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/equal-checker.svg">
  </a>
  <a href="https://github.com/sandropernerstorfer/equal-checker-npm#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>
<p>
  Lightweight function to check if two Objects, Arrays, or single Values are equal.<br>
  Uses Recursion to check any combination and level of nesting.
</p>

## Install

```sh
npm install equal-checker
```

## Usage

```sh
const equalChecker = require('equal-checker');


// -- Test Objects ( types are different in nested object property (diff: 2 <-> '2') ) -- //

let objectOne = {
    name : 'foo',
    note : 'bar',
    object: {a: 1, b: [1, {diff: 2}]},
    array : [1, 2, 3],
};

let objectTwo = {
    name : 'foo',
    note : 'bar',
    object: {a: 1, b: [1, {diff: '2'}]},
    array : [1, 2, 3]
};

// ------------------------------------------------------------ //

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
The ```equalChecker()``` function takes 4 parameters.
* Value 1
* Value 2
* (optional - default = false) Boolean for type checking
* (optional - default = false) Boolean for error messages
---
##### If the third parameter (typeCheck) is set to true:
* will compare values AND data type.
##### If the fourth parameter (errMsg) is set to true and the check returns false:
* will, instead of returning only a false Boolean, return an Array.
* the array will contain the false boolean and an error message explaining the difference.
---
## Author
* Github: [@sandropernerstorfer](https://github.com/sandropernerstorfer)
---
## 📝 License
Copyright © 2021 [Sandro Pernerstorfer](https://github.com/sandropernerstorfer).<br />
This project is [ISC](https://github.com/sandropernerstorfer/equal-checker-npm/blob/master/LICENSE) licensed.
***
