"use strict";

const tmdb = require('./tmdb');

const pressEnter = () => {
	$(document).keypress((e) => {
		if (e.key === 'Enter') {
			let searchText = $('#searchBar').val();
			let query = searchText.replace(/ /g, "%20");
			tmdb.searchMovies(query);
		}
	});
};

module.exports = {pressEnter};