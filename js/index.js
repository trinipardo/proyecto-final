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
