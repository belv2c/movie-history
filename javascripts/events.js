"use strict";

const tmdb = require('./tmdb');
const firebaseApi = require('./firebaseApi');

const pressEnter = () => {
	$(document).keypress((e) => {
		if (e.key === 'Enter') {
			let searchText = $('#searchBar').val();
			let query = searchText.replace(/ /g, "%20");
			tmdb.searchMovies(query);
		}
	});
};

const myLinks = () => {
	$(document).click((e) =>{
		if(e.target.id === "navSearch"){
			$("#search").removeClass("hide");
			$("#myMovies").addClass("hide");
			$("#authScreen").addClass("hide");
		}else if (e.target.id === "mine") {
			$("#search").addClass("hide");
			$("#myMovies").removeClass("hide");
			$("#authScreen").addClass("hide");
		}else if (e.target.id === "authenticate"){
			$("#search").addClass("hide");
			$("#myMovies").addClass("hide");
			$("#authScreen").removeClass("hide");
		}
	});
};


const googleAuth = () => {
	$("#googleButton").click((e) => {
		firebaseApi.authenticateGoogle().then((result) =>{
			console.log("result", result);
		}).catch((error) => {
			console.log("error from authenticateGoogle", error);
		});
	});
};








module.exports = {pressEnter, myLinks, googleAuth};