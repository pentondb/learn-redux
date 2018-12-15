var redux = require('redux');

console.log('Starting redux example');

// redux.createStore accepts one argument, a pure function called a reducer.
// The reducer takes your existing state and the action as arguments, and returns the new state.
var reducer = (state = { name: 'Anonymous' }, action) => {
    // This is the ES5 way to provide a default state. The syntax used above in the parameters is the ES6 way to do the same-ish thing.
    // state = state || { name: 'Anonymous' };

    return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);