var buttonClickedTimes = 0;
var money = 0;

$(document).ready(function() {
	$("#testbutton").click(function() {
		
		$("#selectors02").css("background-color", "red");
		$("#selectors02").css("color", "white");
		$("#clickCounter").text(function() {
			buttonClickedTimes += 1;
			return "This button has been clicked " + buttonClickedTimes + " times";
		});
		$("#moneyCounter").text(function(){
			money += 10;
			return "Ur money is here: $" + money;
		});
		/*
		$("h3, #testbutton").css("background-color", "red");
		
		
		$("h3").css("background-color", "red");
		*/
	});
	
});