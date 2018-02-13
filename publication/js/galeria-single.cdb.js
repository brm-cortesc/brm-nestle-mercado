jQuery(document).ready(function($) {


	var showLayout = function (el) {
		
		var base = (el == '#videos')?'.item-video':'.item-img';
		var item = jQuery(el + ' '+base); 

		// console.log(base)
		// console.log(item)
		
		if(el == '#videos' ){
			jQuery('#imgs').addClass('hidden');
		}else{
			jQuery('#videos').addClass('hidden');
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

		// console.log('ando')


	};

	
	/*click para mostrar cada galeria*/
	jQuery('.btn.btn-primary').click(function (e) {

		e.preventDefault();
		var pos = jQuery(window).scrollTop(),
			loc = jQuery(this).attr('href');

		//*Devolvemos a la url el ancla*//	
		// window.location.hash = loc;

		/*Evitamos el salto de la ventana al cambiar de hash*/
		jQuery(window).scrollTop(pos)


		jQuery('.btn.btn-primary').removeClass('active');

		if(jQuery(this).hasClass('btn-img')){
			
			jQuery(this).addClass('active');
			showLayout('#imgs')	
			// console.log('img ')

		}
		else if(jQuery(this).hasClass('btn-video')){

			jQuery(this).addClass('active')			
			showLayout('#videos')	
			// console.log('video ')


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

	showLayout('#imgs');

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

	jQuery('.galeria-video').each(function() {

		jQuery(this).magnificPopup({
			  type:'iframe',
			  delegate:'.glyphicon-play',
			  gallery:{enabled:true}
			});
		
	});




});