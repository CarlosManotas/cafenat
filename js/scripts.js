$(function(){

	var viewPort = $(window).width();
	var deja     = $(".ente");
	var de       = $(".enter");
	var cafe     = $(".tipoA");
	var mejor    = $(".tipoB");
	var imgO     = $(".img-circular");

	if( viewPort <= 480) {
		
		deja.remove();
		$(".aqui").append('<h1>BAJÁ DE PESO<br>EN CADA COMIDA<br><span class="expecial">CAFÉ VERDE<br> +<br> TÉ VERDE</span></h1>');
		imgScroll();

	}
	if( viewPort >= 480 && viewPort <= 768) {
		deja.animate({opacity:"1"}, 3000);
		imgScroll();
	}
	if (viewPort > 770 && viewPort <= 1400){
		deja.animate({opacity:"1"}, 3000);
		$(".container--formulario").animate({right:"4em"}, 2600);
		$(".container--formulario").animate({right:"1.5em"}, 800);
		imgScroll();
	}
	if (viewPort > 1400) {
		deja.animate({opacity:"1"}, 3000);
		$(".container--formulario").animate({right:"4em"}, 2600);
		$(".container--formulario").animate({right:"1.5em"}, 800);
		imgO.animate({width:"250px",height:"250px"}, 2500);
		imgO.animate({width:"200px",height:"200px"}, 1500);
	}
	
	$("#btn").on("click", function(){

		$("body,html").animate({scrollTop:0}, 1000 );
	});

	function imgScroll (){

		$(window).on("scroll", function(){
				var pantalla = $(window).scrollTop();
				if ( pantalla > 550 ){
					imgO.animate({width:"200px",height:"200px"}, 1500);
				}
			})
	} 

	$(window).on("scroll", function(){
		var pantalla = $(window).scrollTop();
		if ( pantalla >= 1300 ){

				$(".imagen1").animate({left:"0"} , 1000);
				$(".imagen2").animate({left:"0"} , 1500);
				$(".imagen3").animate({top:"0.2em"} , 1600);
			}
	})
	var AnchoPantalla = screen.width;
	var AltoPantalla = screen.height;
	var AnchoVentana = window.innerWidth;
	var AltoVentana = window.innerHeight;
	console.log( 'AnchoPantalla x AltoPantalla = ' + AnchoPantalla + ' x ' + AltoPantalla  )
	console.log( 'AnchoVentana x AltoVentana = '+ AnchoVentana + ' x ' + AltoVentana  )
});
