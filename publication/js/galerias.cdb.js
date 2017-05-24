jQuery(document).ready(function($) {

	/*Animacion del layout de imagenes*/

	var showLayout = function (el) {
		
		var base = (el == '#out-stream')?'.galeria-item':'.galeria';
		var item = jQuery(el + ' '+base); 
		
		if(el == '#out-stream' ){
			jQuery('.galeria-list').addClass('hidden');
		}else{
			jQuery('#out-stream').addClass('hidden');
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
		};


	};

	
	/*click para mostrar cada galeria*/
	jQuery('.container-galeria-cdb .btn.btn-primary').click(function (e) {

		e.preventDefault();
		var pos = jQuery(window).scrollTop(),
			loc = jQuery(this).attr('href');

		//*Devolvemos a la url el ancla*//	
		// window.location.hash = loc;

		/*Evitamos el salto de la ventana al cambiar de hash*/
		jQuery(window).scrollTop(pos)


		jQuery('.btn.btn-primary').removeClass('active');

		if(jQuery(this).hasClass('btn-local')){
			
			jQuery(this).addClass('active');
			showLayout('#local-stream')	

		}
		else if(jQuery(this).hasClass('btn-out')){

			jQuery(this).addClass('active')			
			showLayout('#out-stream')	


		}

	});


	/*Validamos URL para mostrar galeria*/
	var galActual = window.location.hash;

	/*Evitamos scroll*/
	var noScroll = function () {
		setTimeout(function() {
			if(  jQuery(window).scrollTop() > 0 ){
				jQuery(window).scrollTop(0)
			}

		}, 200);
	};
	showLayout('#local-stream');
	

	//Se genera configuracion por cada galeria que se crea
	jQuery('.galeria-single').each(function() {

		jQuery(this).magnificPopup({
			  type:'image',
			  delegate:'.glyphicon-picture',
			  gallery:{enabled:true},
			  image: {
			      titleSrc: 'title'
			    }


			});
		
	});



});