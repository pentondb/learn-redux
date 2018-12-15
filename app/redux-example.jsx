var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;

// redux.createStore accepts one argument, a pure function called a reducer.
// The reducer takes your existing state and the action as arguments, and returns the new state.
var reducer = (state = stateDefault, action) => {
    // This is the ES5 way to provide a default state. The syntax used above in the parameters is the ES6 way to do the same-ish thing.
    // state = state || { name: 'Anonymous' };

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name,
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }]
            };
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter(hobby => hobby.id !== action.id)
            };
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre,
                    }
                ]
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.id)
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
