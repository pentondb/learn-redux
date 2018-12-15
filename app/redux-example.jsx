var redux = require('redux');

console.log('Starting redux example');

// redux.createStore accepts one argument, a pure function called a reducer.
// The reducer takes your existing state and the action as arguments, and returns the new state.
var reducer = (state = { name: 'Anonymous' }, action) => {
    // This is the ES5 way to provide a default state. The syntax used above in the parameters is the ES6 way to do the same-ish thing.
    // state = state || { name: 'Anonymous' };

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name,
            };
        default:
            return state;
    }
};
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes, and capture the function to unsubscribe into a variable
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Herman',
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Emily',
})
