<h1>equal-checker</h1>
<p>
  <a href="https://www.npmjs.com/package/equal-checker" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/equal-checker.svg">
  </a>
  <a href="https://github.com/sandropernerstorfer/equal-checker-npm#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/sandropernerstorfer/equal-checker-npm/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>
<p>
  Lightweight function to check if two Objects, Arrays, or single Values are equal.<br>
  Uses Recursion to check any combination and level of NESTING.
</p>
## Install

```sh
npm install equal-checker
```

## Usage

```sh
const equalChecker = require('equal-checker');


// -- Test Objects ( types are different in array property ) -- //

let objectOne = {
    name : 'john',
    age : 100,
    looks : 'good',
    object: {a:1,b:[1,{value:2}]},
    array : [1,2,3],
};

let objectTwo = {
    name : 'john',
    age : 100,
    looks : 'good',
    object: {a:1,b:[1,{value:2}]},
    array : [1,'2',3]
};

// ------------------------------------------------------------ //

// Without Type Checking
let result = equalChecker(objectOne, objectTwo);
console.log(result);   // true

// With Type Checking
let result = equalChecker(objectOne, objectTwo, true);
console.log(result);   // false

// With Error Message
let result = equalChecker(objectOne, objectTwo, true , true);
console.log(result);   // [ false , '2 and 2 : different values or types'];

```

## Infos

The ```equalChecker()``` function takes 4 parameters.
* Value 1
* Value 2
* Boolean for Type Checking ---- ( optional, default is false )
* Boolean for Error Messages --- ( optional, default is false )
---
##### If the third parameter (typeCheck) is set to true:
* will compare values AND data type
##### If the fourth parameter (errMsg) is set to true and the check returns false:
* will, instead of returning only a false Boolean, return an Array
* the Array will contain the false Boolean and an Error Message explaining the difference.
---
## Author
👤 **Sandro Pernerstorfer**
* Website: https://sandropernerstorfer.netlify.app/
* Github: [@sandropernerstorfer](https://github.com/sandropernerstorfer)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!<br />Feel free to check out the [issues page](https://github.com/sandropernerstorfer/equal-checker-npm/issues).

## Thank you for reading through the description

Feel free to star this project if it helped you !

## 📝 License

Copyright © 2021 [Sandro Pernerstorfer](https://github.com/sandropernerstorfer).<br />
This project is [ISC](https://github.com/sandropernerstorfer/equal-checker-npm/blob/master/LICENSE) licensed.

***