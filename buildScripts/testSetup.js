//This file isn't transpiled, so must use CommonJS and ES5

//Regsister Babel to Transpile, before running tests
require('babel-register');

//disable webpack features that Mocha doesn't understand
require.extensions['.css'] =  function() {};
