/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
*/
todomvc.factory('todoStorage', function () {
	var STORAGE_ID = 'todos-angularjs-perf';
	var myDataRef = new Firebase('https://resplendent-fire-6823.firebaseio.com/');
	return {
		getFireBase: function () {
			return myDataRef;
		},

		put: function (todos) {
			myDataRef.update({todos: todos});
		}
	};
});
