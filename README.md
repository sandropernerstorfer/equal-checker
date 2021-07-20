# Recursive Deep-Check JS Function
### Compare values, objects or arrays
___
Comparing two objects or arrays can be tricky since even though they might share the same properties and values, just comparing them will of course always return false.

This function will take 4 parameters :

    2 * value, object or array
    1 * optional boolean for type checking
    1 * optional boolean: false returns a boolean only, true returns an array with boolean and error message

For example if we pass two objects, the function will first compare the length, then loop through the properties, and finally the values.

Lets say these objects have another object or array nested inside.
The function calls itself via recursion, passing these 'roadblocks' as parameters to deep-check them.

This can go as deep as we want and works with nested objects and arrays.

Once a difference is detected and checked, the function will return false, or with errMsg set to true, it returns an array containing a boolean + error message ).

Otherwise it will return true if everything passed the check.

The third parameter (checkType) is by default 'false' so it will only compare the value using the == operator.

The fourth parameter (errMsg) is by default 'false' so it will by default only return a boolean.