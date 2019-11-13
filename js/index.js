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
