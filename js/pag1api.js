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
