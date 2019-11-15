window.onload = function(){

  var homeLink = document.getElementById("HomeLink");
  var Generoslink = document.getElementById("Generoslink");
  var seriesPorGenero = document.getElementById("seriesPorGenero");
  var seriesGenero = document.getElementById("seriesGenero")
  //var seriesGenero = document.getElementById('seriesGenero')
  HomeLink.onclick = function(){
    window.location.href = 'index.html';
  }

  Generoslink.onclick = function(){
      window.location.href = "pag2.html";


  }
seriesPorGenero.onclick = function (){
  window.location.href = "pag3.html";
}
 //seriesGenero.onclick = function (){
//   window.location.href = "pag4.html"
 }//


 /* var apiKey = "e3bcfbf11e6b8143b068f8b59c89e7bf";

 /* esta no creo q la usen pero por las dudas, es otra key: */
 /*var apiReadKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2JjZmJmMTFlNmI4MTQzYjA2OGY4YjU5Yzg5ZTdiZiIsInN1YiI6IjVkYzcwNDkxOWMyNGZjMDAxNWMyOTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJOtHTzGUTC_LsCop_LYgvqj9UlM9SsKUxCwIaqRkaI";


 /* los requests los hacen con una apiURL: */
 /* var apiURL = 'https://api.themoviedb.org/3/discover/movie?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-AR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

 fetch(apiURL)
   .then(function(response){ return respuesta.json(); })
   .then(function(datos){
     /* aca hacen lo que quieran, como agregar los datos al html */
     /* console.log(datos);



   }); */
