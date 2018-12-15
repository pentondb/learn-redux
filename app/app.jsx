var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// Load foundation
/* Do not need the require lines? after adding the sassLoader entry in webpack.config.js, lecture 8-84 */
/*
require('style!css!foundation-sites/dist/css/foundation.min.css');
*/
require('style!css!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate 3 Project - using React version {React.version}</p>,
  document.getElementById('app')
);

// require('./redux-example.jsx');
require('./redux-todo-example.jsx');
