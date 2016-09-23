$(document).ready(function() {
	
	$(aboutMeInfo).hide();
	
	$("#aboutMeButton").click(function() {
		$(aboutMeInfo).slideToggle(500);
	});
});
