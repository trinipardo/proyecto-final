var apiKey = "e3bcfbf11e6b8143b068f8b59c89e7bf";
var apiReadKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2JjZmJmMTFlNmI4MTQzYjA2OGY4YjU5Yzg5ZTdiZiIsInN1YiI6IjVkYzcwNDkxOWMyNGZjMDAxNWMyOTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJOtHTzGUTC_LsCop_LYgvqj9UlM9SsKUxCwIaqRkaI";
var apiURL = "https://api.themoviedb.org/3/movie/550?api_key=e3bcfbf11e6b8143b068f8b59c89e7bf";

window.onload = function(){

  apiURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&language=es-AR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

  fetch(apiURL)
    .then(function(response){ return response.json(); })
    .then(
      function(datos){
        /* Aca hacen lo que quieran, como agregar los datos al html. Por ejemplo:  */
        /* Busco con getElementById el elemento o etiqueta que quiero cambiarle el contenido: */
        var etiquetaQueQuieroCambiar = document.getElementById('dataContainer');


        /* me fijo que me trajo el query con apiURL: */ console.log(datos);
        var pelis = datos.results;
        console.log(pelis);
        /* recorro el array agregando los resultados al html: */
        for(indice = 0; indice < pelis.length; indice++){
          //innerHTML accede al contenido que esta adentro de una etiqueta
          etiquetaQueQuieroCambiar.innerHTML += pelis[indice].title + "<br />";
        }

      });



}
    //.catch (function (errores)){console.log(errores)};//
    // FETCH DE SERIES TOP RATED

        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=" + apiKey + "&language=en-US&api_key=%3C%3Capi_key%3E%3E")
          .then(function(response) {
            return response.json(); })
          .then(function(datos) {
    //         console.log(informacion);
    // console.log("estrenos");
    var etiquetaQueQuieroCambiar = document.getElementById('topRated');
    console.log (datos);

    var tops = datos.results;
    console.log (tops)


    console.log (datos);

            // console.log(arrayPeliculas);

            for (var i = 0; i < arraySeries.length; i++) {
              var id = arraySeries[i].id
              var title = arraySeries[i].title
              var poster = arraySeries[i].poster_path
    // console.log("https://image.tmdb.org/t/p/w500" + poster);
              document.querySelector("ul#top").innerHTML += "<li> <a href='pag5.html?idPelicula="+id+"'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + poster + " 'uk-cover'> </li>"

            }

          })
          .catch(function(error) {

          })

      // FETCH DE SERIES AL AIRE

fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=" + apiKey + "&language=en-US&api_key=%3C%3Capi_key%3E%3E")
        .then(function(respuesta) {
          return respuesta.json(); })
        .then(function(datos2) {
  //         console.log(informacion);
  // console.log("estrenos");
  var etiquetaQueQuieroCambiar = document.getElementById('alAire');
  console.log (datos2);

  var aire = datos2.results;
  console.log (aire)


          // console.log(arrayPeliculas);

          for (var i = 0; i < arrayPeliculas.length; i++) {
            var id = arrayPeliculas[i].id
            var title = arrayPeliculas[i].title
            var poster = arrayPeliculas[i].poster_path
  // console.log("https://image.tmdb.org/t/p/w500" + poster);
            document.querySelector("ul#upcoming").innerHTML += "<li> <a href='pag5.html?idPelicula="+id+"'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + poster + " 'uk-cover'> </li>"

          }

        })
        .catch(function(error) {

        })
