var apiKey = "e3bcfbf11e6b8143b068f8b59c89e7bf";
var apiReadKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2JjZmJmMTFlNmI4MTQzYjA2OGY4YjU5Yzg5ZTdiZiIsInN1YiI6IjVkYzcwNDkxOWMyNGZjMDAxNWMyOTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJOtHTzGUTC_LsCop_LYgvqj9UlM9SsKUxCwIaqRkaI";
var apiURL = "https://api.themoviedb.org/3/movie/550?api_key=e3bcfbf11e6b8143b068f8b59c89e7bf";

window.onload = function(){

  var homeLink = document.getElementById('homeLink');
  var peliculasLink = document.getElementById('peliculasLink');
  var seriesLink = document.getElementById('seriesLink');
  var seriesGenero = document.getElementById('seriesGenero')
  homeLink.onclick = function(){
    window.location.href = 'index.html';
  }

  peliculasLink.onclick = function(){
      window.location.href = 'pag2.html';


  }
seriesLink.onclick = function (){
  window.location.href = 'pag3.html';
}
 seriesGenero.onclick = function (){
   window.location.href = 'pag4.html'
 }




}
