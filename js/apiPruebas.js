
/* la apiKey: */
var apiKey = "e3bcfbf11e6b8143b068f8b59c89e7bf";

/* esta no creo q la usen pero por las dudas, es otra key: */
var apiReadKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2JjZmJmMTFlNmI4MTQzYjA2OGY4YjU5Yzg5ZTdiZiIsInN1YiI6IjVkYzcwNDkxOWMyNGZjMDAxNWMyOTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJOtHTzGUTC_LsCop_LYgvqj9UlM9SsKUxCwIaqRkaI";


/* los requests los hacen con una apiURL: */
var apiURL = "https://api.themoviedb.org/3/movie/550?api_key=e3bcfbf11e6b8143b068f8b59c89e7bf";

fetch(apiURL)
  .then(function(response){ return respuesta.json(); })
  .then(function(datos){
    /* aca hacen lo que quieran, como agregar los datos al html */
    console.log(datos);



  });
