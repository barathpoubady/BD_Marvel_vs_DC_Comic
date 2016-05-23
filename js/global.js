
(function($)
{
	
	// Initialisation
	$(document).ready(function()
	{
		// Carrousel membres (à propos / personnages)
		$('.carrousel-membres').flexslider(
		{
			animation: "slide",
			directionNav: false,
			slideshowSpeed: 5000,
			animationSpeed: 600
		});
	});	
	
})(jQuery);