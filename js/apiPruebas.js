
/* la apiKey: */
var apiKey = "e3bcfbf11e6b8143b068f8b59c89e7bf";

/* esta no creo q la usen pero por las dudas, es otra key: */
var apiReadKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2JjZmJmMTFlNmI4MTQzYjA2OGY4YjU5Yzg5ZTdiZiIsInN1YiI6IjVkYzcwNDkxOWMyNGZjMDAxNWMyOTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJOtHTzGUTC_LsCop_LYgvqj9UlM9SsKUxCwIaqRkaI";


/* los requests los hacen con una apiURL: */
var apiURL = 'https://api.themoviedb.org/3/discover/movie?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-AR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

fetch(apiURL)
  .then(function(response){ return respuesta.json(); })
  .then(function(datos){
    /* aca hacen lo que quieran, como agregar los datos al html */
    console.log(datos);



  });

// FETCH DE PELÍCULAS CON MAYOR PUNTAJE

fetch('https://api.themoviedb.org/3/tv/top_rated?page=1&language=en-US&api_key=%3C%3Capi_key%3E%3E')
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
//         console.log(informacion);
// console.log("ranking");
    var arrayPeliculas = informacion.results
    // console.log(arrayPeliculas);

    for (var i = 0; i < arrayPeliculas.length; i++) {
      var id = arrayPeliculas[i].id
      var title = arrayPeliculas[i].title
      var poster = arrayPeliculas[i].poster_path

      document.querySelector("ul#top").innerHTML += "<li> <a href='pag5.html?idPelicula="+id+"'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + poster + " 'uk-cover'> </li>"


    }

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

  // FETCH DE SERIES AL AIRE

      fetch('https://api.themoviedb.org/3/tv/airing_today?page=1&language=en-US&api_key=%3C%3Capi_key%3E%3E')
        .then(function(respuesta) {
          return respuesta.json()
        })
        .then(function(informacion) {
  //         console.log(informacion);
  // console.log("estrenos");
          var arrayPeliculas = informacion.results
          // console.log(arrayPeliculas);

          for (var i = 0; i < arrayPeliculas.length; i++) {
            var id = arrayPeliculas[i].id
            var title = arrayPeliculas[i].title
            var poster = arrayPeliculas[i].poster_path
  // console.log("https://image.tmdb.org/t/p/w500" + poster);
            document.querySelector("ul#upcoming").innerHTML += "<li> <a href='../5.DetallePelicula/pagina5.html?idPelicula="+id+"'> <img class=uk-align-center src=https://image.tmdb.org/t/p/w500" + poster + " 'uk-cover'> </li>"

          }

        })
        .catch(function(error) {
          console.log("Error: " + error);
        })
