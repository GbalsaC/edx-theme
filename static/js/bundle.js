(function($){
$(document).ready(function() {
	
	$( "h1.logo" ).click(function() {
	  $( "a.nav-skip" ).text( "Something was selected" ).show().fadeOut( 1000 );
	});
});
})(jQuery);
