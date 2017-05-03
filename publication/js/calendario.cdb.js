jQuery(document).ready(function() {

	/*Arreglo con el que se pinta en el calendario el evento*/
	var fechas = 'js/fechas.json',
		eventos = 'js/eventos.json',
		cal;

	//Cambio de skin sidebar

	var cambiaSkin = function (skin) {
		if( skin == 'nutrición' ){
			skin = 'nutricion'
		};
		jQuery('.detalle-evento').removeClass('evento-nutricion evento-bienestar evento-salud');
		jQuery('.detalle-evento').addClass('evento-'+skin);
		jQuery('.detalle-evento h2 .icon').removeClass('icon-bienestar icon-nutricion icon-salud');
		jQuery('.detalle-evento h2 .icon').addClass('icon-'+skin);

	};

	/*Init Calendario*/
	jQuery(function() {
	
		cal = jQuery( '#calendario-cdb' ).calendario( {
		checkUpdate: false,
		// onDayClick : function( $el, $contentEl, dateProperties ) {

		// 	for( var key in dateProperties ) {
		// 		// console.log( key + ' = ' + dateProperties[ key ] );
		// 	}

		// },
		/*Lang*/
		weeks : [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
		
		} ),

		/*UI Custom*/
		$month = jQuery( '#mes' ).val(cal.getMonth()),
		$year = jQuery( '#year' ).val(cal.getYear());


		/*Navegacion con btns*/

		jQuery( '.btn-next' ).on( 'click', function(e) {
			e.preventDefault()
			cal.gotoNextMonth( updateMonthYear );
		} );
		jQuery( '.btn-prev' ).on( 'click', function(e) {
			e.preventDefault()
			cal.gotoPreviousMonth( updateMonthYear );
		} );

		/*Navegacion meses*/
		$month.change(function() {
			var going = jQuery(this).val();
			cal.gotoMonth(going, $year.val());


		});

		/*Navegacion año*/
		$year.change(function() {
			var going = jQuery(this).val();

			cal.gotoMonth($month.val(), going);

		});

		/*Actualizacion de año/mes*/
		function updateMonthYear() {				
			$month.val( cal.getMonth() );
			$year.val( cal.getYear() );
		};

	});
	

	/*Traemos las fechas que existen*/

	jQuery.ajax({
		url: fechas,
		 dataType:'json',
	     type: 'GET',
	})
	.success(function(data) {
		cal.setData( data )
	});

	/*Traemos las eventos que existen*/
	var loadEventos = function (id) {

			jQuery.ajax({
				url: eventos,
				 dataType:'json',
			     type: 'GET',
			})
			.success(function(data) {
			
				var categoria = jQuery('.detalle-evento h2 span'),
					nombre = jQuery('.detalle-evento .evento-nombre p'),
					hora = jQuery('.detalle-evento .evento-hora p'),
					persona = jQuery('.detalle-evento .evento-conferencista p'),
					desc = jQuery('.detalle-evento .evento-descripcion p'),
					img = jQuery('.detalle-evento img');


				jQuery.each(data, function(i, dat) {

					/*Pintamos el evento necesitamos*/
					if (i === id ) {
						categoria.text(dat.categoria);
						nombre.text(dat.taller);
						hora.text(dat.hora);
						persona.text(dat.conferencista);
						desc.text(dat.descripcion);
						img.attr({
							'src': dat.image,
							'alt': dat.taller,
							'title': dat.taller
						});

						cambiaSkin(dat.categoria);
					};

				});
			
			});
		};

	
	/*Click en un evento*/

	jQuery(document).on('click', '.badge-cal', function  (e) {
		jQuery('.badge-cal').removeClass('active');
		jQuery(this).addClass('active');
		var pos = jQuery(this).attr('id')
		e.preventDefault();

		/*Ejecutamos ajax para traer datos del evento cliqueado*/		
		loadEventos(pos)


		if(jQuery('.detalle-evento').hasClass('active') ){

			if(jQuery(this).attr('class') == !jQuery(this).attr('class') ){
				/*Acá se valida info del evento para cambiar el DOM entre eventos*/
				jQuery('.detalle-evento').addClass('active')
			}

		}else{

			jQuery('.detalle-evento').toggleClass('active');
		}

	});

	jQuery(document).on('click', '.btn-cerrar', function  (e) {
		e.preventDefault();
		jQuery('.detalle-evento').removeClass('active');
		
	});


});