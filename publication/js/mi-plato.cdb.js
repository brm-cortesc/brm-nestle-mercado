jQuery(document).ready(function($) {
		
	$('.plato-tooltip .hotspot').click(function() {			
			$('.plato-tooltip').removeClass('active');
			$(this).parent().addClass('active');
		});


});