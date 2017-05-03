jQuery(document).ready(function($) {
	
	jQuery(".panzoom").panzoom({
		startTransform: 'scale(2)',
		increment: 0.1,
		minScale: 0.5,
		contain: 'automatic'
	})
	/*evento con rueda de mouse*/
	.parent().on('mousewheel.focal', function( e ) {
            e.preventDefault();
            var delta = e.delta || e.originalEvent.wheelDelta;
            var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
            jQuery(".panzoom").panzoom('zoom', zoomOut, {
              animate: false,
              focal: e
            });
    });


    jQuery('.container-pan-cdb .btn.btn-primary').click(function (e) {
    	e.preventDefault();

    	jQuery('.container-pan-cdb .btn.btn-primary').removeClass('active');

    	if( jQuery(this).hasClass('btn-casa') ){

    		jQuery(this).addClass('active')
    		jQuery('.container-casa').removeClass('hidden');
    		jQuery('.container-mercado').addClass('hidden');

    	}else{
    		jQuery(this).addClass('active');
    		jQuery('.container-casa').addClass('hidden');
    		jQuery('.container-mercado').removeClass('hidden');
    	}


    });


});