
const apiKey = "e3bcfbf11e6b8143b068f8b59c89e7bf";
const urlBasePosters = "https://image.tmdb.org/t/p/original";

function cargarCarousel( url, carousel, carouselInner){

    fetch( url )
      .then( function( response ){
        return response.json();
      } )
      .then(
        function ( series ){


          imagenesCarouselHTML = "";


          for(var i = 0; i < series.results.length; i++) {

            var pathPoster = urlBasePosters + series.results[i].poster_path;

            var divClass = ' class = "carousel-item col-12 col-sm-6 col-md-4 col-lg-3" ';

            var imgClass = ' class = "img-fluid mx-auto d-block" ';

            var onclick = ' onclick = "irADetalleSerie(' + series.results[i].id + ');" ';

            $('<div ' + divClass + '><img ' + onclick + imgClass + ' src="' + pathPoster + '" >   </div>').appendTo('#' + carouselInner);

          }

          $( "#" + carouselInner + ' .carousel-item').first().addClass('active');

          $('#' + carousel).carousel( {interval: 1000} );


          $('#' + carousel).on('slide.bs.carousel', function (e) {


              var $e = $(e.relatedTarget);
              var idx = $e.index();
              var itemsPerSlide = 5;
              var totalItems = $('#' + carousel + '  .carousel-item').length;

              if (idx >= totalItems-(itemsPerSlide-1)) {
                  var it = itemsPerSlide - (totalItems - idx);
                  for (var i=0; i<it; i++) {
                      // append slides to end
                      if (e.direction=="left") {
                          $('#' + carousel + '  .carousel-item').eq(i).appendTo('#' + this.id + '-inner');
                      }
                      else {
                          $('#' + carousel + '  .carousel-item').eq(0).appendTo('#' + this.id + '-inner');
                      }
                  }
              }
          });

        }
      );

}


function mostrarNombreGeneroActivo(){

  var url = "https://api.themoviedb.org/3/genre/tv/list?api_key=e3bcfbf11e6b8143b068f8b59c89e7bf&page=1&language=es-mx";

  fetch(url).then(
    (response) => {
        return response.json();
    }
    ).then(
      (generos) =>{

        nombreGeneroActivo = "Genero inexistente";

        var params = new URLSearchParams( document.location.search );

        var idGeneroACargar = params.get("id_genero") ;

        var encontrado = false;
        var numGenero = 0;

        while ( numGenero < generos.genres.length && encontrado == false ){

          var genero = generos.genres[numGenero];

          if ( genero.id == idGeneroACargar ){
            encontrado = true;
          }
          else{
            numGenero++;
          }

        }

        if ( encontrado ){
          nombreGeneroActivo = generos.genres[numGenero].name;
        }

        document.getElementById("titulo-listado-series-genero").innerHTML = nombreGeneroActivo;

      }
    );


}

function cargarListadoSeriesPorGenero( idGenero ){

  var url = "https://api.themoviedb.org/3/discover/tv?api_key=e3bcfbf11e6b8143b068f8b59c89e7bf&sort_by=popularity.desc&page=1&with_genres=" + idGenero;

  fetch(url).then(
    function(response){
      return response.json();
    }
  ).then(
    function(seriesGenero){

      mostrarNombreGeneroActivo();

      cargarCards( "contenedor-series-genero", seriesGenero );
    }
  );

}

function cargarTarjetaDetalle( serie ){

    var contenedorImagen = document.getElementById( "contenedor-imagen-detalle");
    var contenedorInfo = document.getElementById( "contenedor-info-detalle");
    var contenedorTrailer = document.getElementById( "contenedor-trailer-detalle");

    var tituloSerieDetalle = document.getElementById( "titulo-serie-detalle");

    tituloSerieDetalle.innerHTML = serie.name;

    cardImg =  document.createElement('img');

    cardImg.className = "card-img-top img-fluid";
    cardImg.src = urlBasePosters + serie.poster_path;
    cardImg.id = serie.id;

    var infoSerieHTML = "<ul>";

    infoSerieHTML += "<li>" + serie.original_language + "</li>";
    infoSerieHTML += "<li>" + serie.first_air_date + "</li>";
    infoSerieHTML += "<li>" + serie.overview + "</li>";


    infoSerieHTML += "</ul>";

    infoSerieHTML += '<ul id="generos-serie">';

    for ( var numGenero=0; numGenero < serie.genres.length; numGenero++)
    {

      var genero = serie.genres[numGenero];

      infoSerieHTML += '<li class="genero-detalle-serie">';

      infoSerieHTML += '<a href=pag3.html?id_genero=' + genero.id + '>' + genero.name + '</a>';

      infoSerieHTML += '</li>';
    }

    infoSerieHTML += '</ul>';

    contenedorInfo.innerHTML = infoSerieHTML;

    contenedorImagen.appendChild(cardImg);


    var urlTrailer = "https://api.themoviedb.org/3/tv/" + serie.id + "/videos?&api_key=e3bcfbf11e6b8143b068f8b59c89e7bf";

    fetch( urlTrailer ).then(
      function(response){
        return response.json();
      }
    ).then(
      function( trailers ){

        var htmlTrailer = "";

        for (var numTrailer = 0; numTrailer < trailers.results.length; numTrailer++){
          var htmlTrailer = htmlTrailer +  '<div><iframe width="600" height="380" src="https://www.youtube.com/embed/' + trailers.results[numTrailer].key + ' " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        }

        contenedorTrailer.innerHTML = htmlTrailer;

      }

    );


}


function cargarCards( contenedorListado, series ){

    var cardContainer = document.getElementById( contenedorListado );

    cardContainer.innerHTML = "";

    var row = document.createElement("div");
    row.className = "row";

    var cardImg;

    for (var i=0; i < series.results.length; i++){

      serie = series.results[i];

      var col = document.createElement('div');
      col.className = "col-md-3 my-2";

      var card = document.createElement('div');
      card.className = 'card shadow cursor-pointer';
      card.style.width = "18rem";

      cardImg =  document.createElement('img');

      cardImg.className = "card-img-top img-fluid";
      cardImg.src = urlBasePosters + serie.poster_path;
      cardImg.id = serie.id;

      var cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      var title = document.createElement('h5');
      title.innerText = serie.name;
      title.className = 'card-title';


      cardBody.appendChild(title);
      card.appendChild(cardImg);
      card.appendChild(cardBody);

      col.appendChild(card)

      row.appendChild(col);

      cardImg.addEventListener("click", function(){ irADetalleSerie(this.id); }  );

    }

    cardContainer.appendChild(row);

}

function cargarDetalleSerie( idSerie ){

  var url = "https://api.themoviedb.org/3/tv/" + idSerie + "?api_key=e3bcfbf11e6b8143b068f8b59c89e7bf&language=es-mx";

    fetch(url).then(
      function( response ){
        return response.json();
      }
    ).then(
      function( detalleSerie ){

        cargarTarjetaDetalle(  detalleSerie )
      }
    );
}

function cargarRecomendaciones( idSerie ){

  var url = "https://api.themoviedb.org/3/tv/" + idSerie + "/recommendations?api_key=e3bcfbf11e6b8143b068f8b59c89e7bf&page=1";

  var recomendaciones = document.getElementById("contenedor-recomendaciones");

  recomendaciones.innerHTML = "<h1>RECOMENDACIONES</h1>";

  cargarCarousel(url, "carousel-recomendaciones" , "carousel-recomendaciones-inner");

  document.getElementById("carousel-recomendaciones").style.display = 'block';
}


function cargarGeneros(){
  var url = "https://api.themoviedb.org/3/genre/tv/list?api_key=e3bcfbf11e6b8143b068f8b59c89e7bf&page=1&language=es-mx";

  fetch(url).then(
    function(response){
      return response.json();
    }
  ).then(
    function(generos){

      var tablaGeneros = document.getElementById("tablaGeneros");

      var tablaHTML = "";

      var numColumna = 0 ;

      for( var item = 0; item < generos.genres.length; item++){

        if ( numColumna == 0 ){
          tablaHTML += "<tr>"
        }

        tablaHTML += "<th><a href=\"pag3.html?id_genero=" + generos.genres[item].id + "\">" + generos.genres[item].name + "</a></th>";

        if ( numColumna == 3){
          tablaHTML += "</tr>";
          numColumna = 0;
        }
        else{
          numColumna++;
        }

      }

      tablaGeneros.innerHTML = tablaHTML;
    }
  );
}


function irADetalleSerie(idSerie){

  window.location.href = "pag5.html?id_serie=" + idSerie;
}

$(document).ready(
  function(){

    cargarCarousel('https://api.themoviedb.org/3/tv/popular?api_key=' + apiKey + '&page=1&language=es-mx', "carousel-mas-populares" , "carousel-mas-populares-inner");
    cargarCarousel('https://api.themoviedb.org/3/tv/top_rated?api_key=' + apiKey + '&page=1&language=es-mx', "carousel-mejor-calificadas" , "carousel-mejor-calificadas-inner");
    cargarCarousel('https://api.themoviedb.org/3/tv/airing_today?api_key=' + apiKey + '&page=1&language=es-mx', "carousel-al-aire" , "carousel-al-aire-inner");

  }
);

function ejecutarBusqueda(){
  var textoBuscado = document.getElementById("txtBusqueda").value;

  location.href = "pag4.html?textoBuscado=" + textoBuscado;
}

function ejecutarBusquedaAvanzada(){

  var year = document.getElementById("year").value;
  var idGeneroIncluir = document.getElementById("genero_a_incluir").value;
  var idGeneroExcluir = document.getElementById("genero_a_excluir").value;
  var orden = document.getElementById("orden").value;


  if ( validarFormularioBusquedaAvanzada() == true ){


    if ( idGeneroIncluir == -1){
      idGeneroIncluir = "";
    }

    if ( idGeneroExcluir == -1){
      idGeneroExcluir = "";
    }

    url = "https://api.themoviedb.org/3/discover/tv?api_key=e3bcfbf11e6b8143b068f8b59c89e7bf&language=es-mx&sort_by=" + orden + "&first_air_date_year=" + year + "&page=1&without_genres=" + idGeneroExcluir + "&with_genres=" + idGeneroIncluir;

    fetch(url).then(
      function(response){
        return response.json();
      }
    ).then(
      function( resultadoBusqueda ){

          cargarResultadoBusquedaAvanzada( resultadoBusqueda );

      }

    );

  }


}

function validarFormularioBusquedaAvanzada(){

  var selectorIncluirGenero = document.getElementById("genero_a_incluir").value;
  var selectorExcluirGenero = document.getElementById("genero_a_excluir").value;
  var year = document.getElementById("year").value;

  var formValido = true;

  if ( selectorIncluirGenero == -1 && selectorExcluirGenero == -1 && year == "" ){
    alert("Debe elegir al menos un criterio de busqueda");
    formValido = false;
  }
  else{
    if ( selectorIncluirGenero != -1 && selectorExcluirGenero != -1){
      alert("Debe seleccionar sólo un genero a incluir/excluir");
      formValido = false;
    }
  }

  return formValido;

}

function cargarResultadoBusqueda(){

  var params = new URLSearchParams(location.search);

  var textoBuscado = params.get("textoBuscado");

  var url = "https://api.themoviedb.org/3/search/tv?api_key=e3bcfbf11e6b8143b068f8b59c89e7bf&language=es-mx&query=" + textoBuscado + "&page=1";

  fetch(url).then(
    function(response){
      return response.json();
    }
  ).then(
    function(seriesEncontradas){

      if ( seriesEncontradas.total_results > 0 ) {
        cargarCards( "contenedor-resultado-busqueda", seriesEncontradas );
      }

      document.getElementById("txtBusqueda").value = textoBuscado;
      document.getElementById("titulo-resultado-busqueda").innerHTML = seriesEncontradas.total_results + ' resultado/s para "' + textoBuscado + '"';

    }
  );

}

function cargarResultadoBusquedaAvanzada( seriesEncontradas ){

    if ( seriesEncontradas.total_results > 0 ) {
      cargarCards( "contenedor-resultado-busqueda", seriesEncontradas );
    }

    document.getElementById("titulo-resultado-busqueda").innerHTML = seriesEncontradas.total_results + ' resultado/s';

}

function cargarCombo( nombreDelCombo, data ){

  var comboACargar = document.getElementById(nombreDelCombo);

  var itemsCombo = '<option value="-1"></option>';

  for ( var i=0; i < data.length; i++){
    itemsCombo += "<option value=\"" + data[i].id + "\">" + data[i].name + "</option>";
  }

  comboACargar.innerHTML = itemsCombo;

}

function initFormBusqueda(){

  var url = "https://api.themoviedb.org/3/genre/tv/list?api_key=e3bcfbf11e6b8143b068f8b59c89e7bf&page=1&language=es-mx";

  fetch(url).then(
    function(response){
      return response.json();
    }
  ).then(
    function(generos){

      cargarCombo("genero_a_incluir", generos.genres);

      cargarCombo("genero_a_excluir", generos.genres);
    }
  );

}
