jQuery(document).ready(function($) {

	/*Animacion del layout de imagenes*/
	var item = $('.galeria-item');
		jQuery(item).addClass('animated');

		/*Delay de animacion entre imagenes existentes*/
		var byPass = function (x) {
			setTimeout(function () {
				item.eq(x).removeClass('fadeOut');
				item.eq(x).addClass('fadeInUp bounce');
			}, timer );
		};

		for(x =0;x <= item.length; x++){
			var timer = x * 100;
			byPass(x);
		};



	//Se genera configuracion por cada galeria que se crea
	jQuery('.galeria-single').each(function() {

		jQuery(this).magnificPopup({
			  delegate:'.glyphicon-picture',
			  type:'image',
			  gallery:{enabled:true}

			});
		
	});



});