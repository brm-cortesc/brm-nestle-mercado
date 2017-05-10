jQuery(document).ready(function() {

	/*Animacion del layout de imagenes*/

	var showLayout = function (el) {
		
		// var base = (el == '#talleres')?'.galeria':'.galeria';
		var item = jQuery(el + ' .galeria'); 
		
		if(el == '#talleres' ){
			jQuery('.galeria-list').addClass('hidden');
		}else{
			jQuery('#talleres').addClass('hidden');
		}

		jQuery(el).removeClass('hidden');

		jQuery(item).removeClass('fadeInUp bounce');
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
		}


	};

	showLayout('#streaming');


    /*click para mostrar cada galeria*/
	jQuery('.container-galeria-cdb .btn.btn-primary').click(function (e) {

		e.preventDefault();


		jQuery('.btn.btn-primary').removeClass('active');

		if(jQuery(this).hasClass('btn-streaming')){
			
			jQuery(this).addClass('active');
			showLayout('#streaming');

		}
		else if(jQuery(this).hasClass('btn-talleres')){

			jQuery(this).addClass('active');
			showLayout('#talleres');


		}

	});
	
});