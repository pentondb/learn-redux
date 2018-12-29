var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes, and capture the function to unsubscribe into a variable
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('New state', store.getState());

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
    }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Herman'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Swimming'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Gone with the Wind', 'Drama'));
store.dispatch(actions.addMovie('When Harry Met Sally', 'Romantic Comedy'));
store.dispatch(actions.addMovie('2001: A Space Odyssey', 'Science Fiction'));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.removeMovie(2));
