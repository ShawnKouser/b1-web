$(document).ready(function() {

	$(aboutMeInfo).hide();

	$("#aboutMeButton").click(function() {
		$(aboutMeInfo).slideToggle(500);
	});

	// start of mouseover

	$(".mouseChange").mouseenter(function() {
		$(this).css("font-size", "2.5em");
		$(this).css("color", "#0000FF");
	});

	$(".mouseChange").mouseleave(function() {
		$(this).css("font-size", "2em");
		$(this).css("color", "#FFFFFF");
	});

	// shop

	$(".autoClickerItem").hide();
	$(".upgradeItem").hide();

	$("#upgrade").click(function() {
		$("#upgrade").css("background-color", "#009AB2");
		$("#auto-clicker").css("background-color", "#00BCD4");

		$(".autoClickerItem").hide();
		$(".upgradeItem").show();
	});

	$("#auto-clicker").click(function() {
		$("#upgrade").css("background-color", "#00BCD4");
		$("#auto-clicker").css("background-color", "#009AB2");

		$(".upgradeItem").hide();
		$(".autoClickerItem").show();
	});
});
