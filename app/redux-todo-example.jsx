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
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('searchText is', store.searchText);
    document.getElementById('app').innerHTML = state.searchText;
});
//unsubscribe();

console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Work'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Play'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Sleep'
});
