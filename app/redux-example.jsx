var redux = require('redux');

console.log('Starting redux example');


// Name reducer and action generators
// ----------------------------------------
var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    };
};

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};

// Hobby reducer and action generators
// ----------------------------------------
var nextHobbyId = 1;
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

var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};

var removeHobby = (id) => {
    type: 'REMOVE_HOBBY',
        id
};

// Movie reducer and action generators
// ----------------------------------------
var nextMovieId = 1;
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

var addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    }
};

var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    };
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

store.dispatch(changeName('Herman'));

store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Swimming'));
store.dispatch(removeHobby(2));

store.dispatch(addMovie('Gone with the Wind', 'Drama'));
store.dispatch(addMovie('When Harry Met Sally', 'Romantic Comedy'));
store.dispatch(addMovie('2001: A Space Odyssey', 'Science Fiction'));

store.dispatch(changeName('Emily'));

store.dispatch(removeMovie(2));
