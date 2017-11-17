jQuery(document).ready(function () {
	var regex = /^(.+?)(\d+)$/i;

	var cloneIndex = jQuery('.invitados-form').length;
	
	/*Funcion para clonar campos completos*/

    console.log(cloneIndex)

	function Clone(that){
		if (cloneIndex <= 1 ) {

			jQuery('.invitados-form').removeClass('hidden');
			cloneIndex++;

		}else{
	    jQuery(".invitados-form").first().clone()
	        .insertBefore(jQuery(that))
	        .attr("id", "invitados-form-" + cloneIndex)
	        .find("*")
	        .each(function() {
	            var id = this.id || "";
	            var name = this.name || "";
	            var label = this.getAttribute('for');
	            var match = id.match(regex) || [];
	    
	            this.id = id + (cloneIndex)
	            this.name = name + (cloneIndex)

	            if(label != null){
	            	eLabel = label + (cloneIndex);
	            	label = this.setAttribute('for', eLabel )
	            }
	        })
	        jQuery("#invitados-form-" + cloneIndex).find('.num-invitado').text(cloneIndex)

	    cloneIndex++;
		};
	};

	jQuery('.btn-invitado').click(function(e) {
		e.preventDefault();
		Clone(jQuery(this));
	});


	/*Validacion registro base*/
	

	


/* NO pasar de aca*/
});