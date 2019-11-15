
//LISTADO DE GÉNEROS DE TMDB
// var apiKey = "e3bcfbf11e6b8143b068f8b59c89e7bf";
/*var apiURL = 'https://api.themoviedb.org/3/genre/tv/list?language=en-US&api_key=%3C%3Capi_key%3E%3E'
var mostPopularmovies = /discover/movie?sort_by=popularity.desc

window.onload = function(){

fetch (apiURL)
.then(function(response){ return respuesta.json(); })

.then(function(datos){
var etiquetaQueQuieroCambiar = document.getElementById('dataContainer');
console.log(datos)




}*/
window.onload=function () {

var apiURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=d6ff71a6bd2a94eaac5b986a9112d505&page=1"
// FETH DE PELÍCULAS POR GÉNERO
 fetch(apiURL)
  .then(function(respuesta) {
        return respuesta.json()
      })
  .then(function(informacion) {
  console.log(informacion);

  var generos= informacion.genres
  console.log(generos);

// UN FOR PARA CADA GÉNERO
  for (var i = 0; i < generos.length; i++) {
    var id = generos[i].id
    var nombre = generos[i].name

    document.querySelector("#generos").innerHTML += "<a class=uk-text-center href=pag3.html?idDeGenero=" + id + "&nombreDeGenero="+nombre+">" + nombre + "</a>"
  }
})

  .catch(function(error) {
   console.log("Error: " + error);
      })

}
