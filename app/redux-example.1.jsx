var redux = require('redux');

console.log('Starting redux example');

/*
Pure function: 
Given the same inputs, always returns the same result. 
No side-effects: cannot update variables outside the scope of the function.
Avoid promises and asychronous calls.
Cannot depend on values defined outside the function, cannot modify objects or arrays passed in.
*/
function add(a, b) {
    return a + b;
}

function changeProp(obj) {
    // The following code returns a new object, retrieving the properties of the obj argument, and updating only the selected properties
    return {
        ...obj,
        name: 'Frank',
        age: 42,
    };
    // The following code modifies the obj argument, which is not 'pure' behavior
    // obj.name = 'Billy';
    // return obj;
};

var startingValue = {
    name: 'Derek',
    age: 57,
};
var res = changeProp(startingValue);
console.log(startingValue);
console.log(res);
