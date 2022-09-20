// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

console.log('🚀 It Works!');

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */

// 📝 TODO 1: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {
	return filmingLocations.length
}
console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)

// 📝 TODO 2: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array
function sortFilmingLocationsByStartDate () {

	let listStartDate = filmingLocations.sort(function(a,b){
		return new Date(b.fields.date_debut) - new Date(a.fields.date_debut)
	});
	return listStartDate
}
let listFinale =sortFilmingLocationsByStartDate()
console.log(listFinale[0],listFinale[listFinale.length-1])

// 📝 TODO 3: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020 () {
	let list2020 = filmingLocations.filter(x => new Date(x.fields.date_debut).getFullYear()==2020)
	return list2020.length
}
console.log(`There are ${getFilmingLocationsNumber2020()} filming locations in 2020 `)

// 📝 TODO 4: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear () {
	let filmsNumberYear = new Map();
	filmingLocations.forEach(x => filmsNumberYear.set(new Date(x.fields.date_debut).getFullYear(), filmsNumberYear.get(new Date(x.fields.date_debut).getFullYear()) + 1 || 1))

	return filmsNumberYear;
}
console.log(getFilmingLocationsNumberPerYear())

// 📝 TODO 5: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict () {
	let filmsNumberYear = new Map();
	filmingLocations.forEach(x => filmsNumberYear.set(x.fields.ardt_lieu, filmsNumberYear.get(x.fields.ardt_lieu) + 1 || 1))

	return filmsNumberYear;
}
console.log(getFilmingLocationsNumberPerDistrict())

// 📝 TODO 6: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm () {
	return []
}
console.log()

// 📝 TODO 7: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	let listFilms = new Map();
	filmingLocations.forEach(x => listFilms.set(x.fields.nom_tournage, listFilms.get(x.fields.nom_tournage) + 1 || 1))
	return listFilms.size;
}
console.log(`There is ${getNumberOfFilms()} different films in the list`)

// 📝 TODO 8: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {
	let listLRDM = filmingLocations.filter(x => x.fields.nom_tournage=='LRDM - Patriot season 2');
	let listLocationsLRDM = new Array();
	listLRDM.forEach(x => listLocationsLRDM.push(x.fields.adresse_lieu));

	return listLocationsLRDM;
}
console.log(getArseneFilmingLocations())

// 📝 TODO 9: Tous les arrondissement des lieux de tournage de nos films favoris (pas fini)
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations (favoriteFilmsNames) {
	/*
	let favoriteFilmsLocations = new Map();
	for (const item in filmingLocations)
		{
			if(favoriteFilmsNames.includes(item.fields.nom_tournage))
			{
				favoriteFilmsLocations.set(item.fields.nom_tournage,item.fields.ardt_lieu);
			}
		}

	return favoriteFilmsLocations

 */
}
const favoriteFilms =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	]

//console.log(getFavoriteFilmsLocations (favoriteFilms))

// 📝 TODO 10: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {
	return { }
}

// 📝 TODO 11: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	let filmsNumberType = new Map();
	filmingLocations.forEach(x => filmsNumberType.set(x.fields.type_tournage, filmsNumberType.get(x.fields.type_tournage) + 1 || 1))

	return filmsNumberType;
}
console.log(countFilmingTypes ())
// 📝 TODO 12: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	let filmsNumberType = new Map();
	filmingLocations.forEach(x => filmsNumberType.set(x.fields.type_tournage, filmsNumberType.get(x.fields.type_tournage) + 1 || 1))

	const sortedFilmingType = [...filmsNumberType].sort((a,b)=>b[1]-a[1]);
	return sortedFilmingType
}
console.log(sortedCountFilmingTypes())
/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO 13: Find the filming location with the longest duration
// 1. Implement the function
// 2. Log the filming location, and its computed duration
//On ajoute 86400000 (nombre de ms sur un jour) à chaque calcul car un tournage sur un seul jour comptera pour 0 jour de tournage dans le calcul (on fait la diff de jours entre le début et la fin)
function longestDurationFilming(){
	let durationTime = new Map();
	filmingLocations.forEach(x =>durationTime.set(x.fields.adresse_lieu,durationTime.get(x.fields.adresse_lieu)+(new Date(x.fields.date_fin) - new Date(x.fields.date_debut))+86400000||(new Date(x.fields.date_fin) - new Date(x.fields.date_debut))+86400000));
	let sortedDurationTime = [...durationTime].sort((a,b)=>b[1]-a[1]);
	sortedDurationTime.forEach(x => x[1]=duration(x[1]));
	return sortedDurationTime[0]
}
console.log(longestDurationFilming())

// 📝 TODO 14: Compute the average filming duration
// 1. Implement the function
// 2. Log the result

function averageFilmDuration(){
	let averageDuration = 0;
	filmingLocations.forEach(x => averageDuration = averageDuration+(new Date(x.fields.date_fin) - new Date(x.fields.date_debut))+86400000)
	return averageDuration/getNumberOfFilms();
}
console.log(`Average film duration : ${duration(averageFilmDuration())}`)
