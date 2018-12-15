var redux = require('redux');

console.log('Starting redux-todo-example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: [],
};

// reducer takes state and action to return the new state
var reducer = (state = stateDefault, action) => {

    return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);