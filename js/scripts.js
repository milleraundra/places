function Place(location1, landmark, timeOfYear, note) {
	this.location1 = location1;
	this.landmark = landmark;
	this.timeOfYear = timeOfYear;
	this.note = note;
}

$(document).ready(function() {
	$("form#new-place").submit(function(event) {
		event.preventDefault();

		var inputtedLocation = $("input#new-location1").val();
		var inputtedLandmark = $("input#new-landmark").val();
		var inputtedTimeOfYear = $("input#new-time-of-year").val();
		var inputtedNote = $("input#new-note").val();
		var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedTimeOfYear, inputtedNote);

		$("ul#places").append("<li><span class='place'>" + newPlace.location1 + "</span></li>");

		$("input#new-location1").val("");
	 	$("input#new-landmark").val("");
		$("input#new-time-of-year").val("");
		$("input#new-note").val("");


		$(".place").last().click(function() {
	  		$("#show-place").show();
	  		$(".location1").text(newPlace.location1);
			$(".landmark").text(newPlace.landmark);
			$(".time-of-year").text(newPlace.timeOfYear);
			$(".note").text(newPlace.note);
		});
	});
});
