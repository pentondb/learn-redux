var redux = require('redux');

console.log('Starting redux-todo-example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: [],
};

// reducer takes state and action to return the new state
var reducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText,
            };
        default:
            return state;
    }
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Something else',
});

console.log('searchText should be Something else', store.getState());