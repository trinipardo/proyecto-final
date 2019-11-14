
//LISTADO DE GÉNEROS DE TMDB
var apiKey = "e3bcfbf11e6b8143b068f8b59c89e7bf";
var apiURL = 'https://api.themoviedb.org/3/discover/movie?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-AR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1;
var mostPopularmovies = /discover/movie?sort_by=popularity.desc

window.onload = function(){

fetch (apiURL)
.then(function(response){ return respuesta.json(); })

.then(function(datos){
var etiquetaQueQuieroCambiar = document.getElementById('dataContainer');
console.log(datos)




 }
