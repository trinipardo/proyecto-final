const apiKey = "e3bcfbf11e6b8143b068f8b59c89e7bf";
const urlBasePosters = "https://image.tmdb.org/t/p/original";


function cargarSeriesMasPopulares(){

		fetch('https://api.themoviedb.org/3/tv/popular?api_key=' + apiKey + '&page=1')
			.then( function( response ){
				return response.json();
			} )
			.then(
				function ( seriesMasPopulares ){


					imagenesCarouselHTML = "";


					for(var i = 0; i < seriesMasPopulares.results.length; i++) {

						var pathPoster = urlBasePosters + seriesMasPopulares.results[i].poster_path;

					  	$('<div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 carousel-item"><img class="img-fluid mx-auto" src="' + pathPoster + '" >   </div>').appendTo('#carousel-inner-mejor-calificadas');

					  	$('<li data-target="#carousel-mas-populares" data-slide-to="'+ i + '"></li>').appendTo('.carousel-indicators')

					}

				  $('.carousel-item').first().addClass('active');
				  $('.carousel-indicators > li').first().addClass('active');
				 
				
				}
			);

}

$(document).ready(
	function(){

		cargarSeriesMasPopulares();
	}
);


