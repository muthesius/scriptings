$(document).ready(function() {
    //Internaltionalisierung
    $(".language").click(function(){
	   
	   if($(this).html() == 'english')
	        var lang = 'en';
	    else
	        var lang = 'de';
	   document.location.href=baseUrl + 'action/toggle-lang/'+lang
	
	    
    });


});