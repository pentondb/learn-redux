var redux = require('redux');

console.log('Starting redux example');

var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    };
};

var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter(hobby => hobby.id !== action.id);
        default:
            return state;
    };
};

var moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre,
                }
            ];
        case 'REMOVE_MOVIE':
            return state.filter(movie => movie.id !== action.id);
        default:
            return state;
    }
};

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
});

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes, and capture the function to unsubscribe into a variable
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;

    console.log('New state', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Herman',
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
})

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Swimming'
})

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Gone with the Wind',
    genre: 'Drama'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'When Harry Met Sally',
    genre: 'Romantic Comedy'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: '2001: A Space Odyssey',
    genre: 'Science Fiction'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Emily',
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 2
});
