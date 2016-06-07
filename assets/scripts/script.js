$(document).ready(function() {

    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('#menu').offset().top;

    $(window).scroll(function(){
        if($(window).scrollTop() > stickyHeaderTop) {
            if ($(window).width() >= 1280) {
            	$('#menu').css({position: 'fixed', top: '0px'});
            }
        } else {
            $('#menu').css({position: 'static', top: '0px'});
        }
    });

    $(window).resize(function(){
	    if ($(window).width() < 1280) {
	    	$('#menu').prepend('<img id="theImg" src="assets/images/menu.svg"/>');
			$('#theImg').css({top: "10px", left: "10px", position: 'fixed', width: '50px', height: '50px'});
	    } else {
	    	if ($("#theImg").length > 0) {
		    	$("#theImg").remove();
		    }
	    }
		
		$('#theImg').click(function(){
	        $("#menu ul").toggle();
	    });
    });
});
