"use strict";

let tmdbKey;
const dom = require('./dom');

const searchTMDB = (query) => {
	return new Promise((resolve, reject) => {
		$.ajax(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&language=en-US&page=1&include_adult=false&query=${query}`).done((data) => {
				resolve(data.results);
		}).fail((error) => {
				reject(error);
		});
	});
};

const searchMovies = (query) => {
	searchTMDB(query).then((data) => {
		showResults(data);
	}).catch((error) => {
		console.log("error in search Movies", error);
	});
};

const setKey = (apiKey) => {
	tmdbKey = apiKey;
	console.log(tmdbKey);
};

const showResults = (movieArray) => {
	dom.clearDom();
	dom.domString(movieArray);
};

module.exports = {setKey, searchMovies};