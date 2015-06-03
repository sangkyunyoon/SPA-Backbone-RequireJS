define([
	"backbone",
	"backbone.localStorage"
], function (Backbone) {

	'use strict';

	var AppModel = Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage('AppSettings'),
		defaults: {
			'backgroundColor': '#fff',
			'celsius': true,
			'welcomeMessage': 'Welcome to Weather Watcher'
		}
	});

	return AppModel;

});