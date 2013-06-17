$(document).ready(function () {
	$('a[rel="add-event"]').click(function (e) {
		e.preventDefault();
		var p = $(this).offset();
		$('<div id="overlay-sendmsg">').load(this.href, {ajaxCall : true}).css({
			top: p.top +"px",
			left: (p.left-100) + "px"
		}).appendTo("body");		
	});
});