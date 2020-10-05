$(document).ready(function () {
	var date = moment().format("L");
	var timeNow = moment().format("LT");
	var timeSlot = $("#left");
	var eventDiv = $("#middle");
	var lockEventBtn = $("#right");

	$("#currentDay").text(date);
	$("#currentTime").text(timeNow);

	var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	for (let i = 0; i < hours.length; i++) {
		// Create div, added content, then appended to parent
		var amHours = $("<div>");
		amHours.attr("value", hours[i]);
		amHours.text(hours[i] + "AM");
		timeSlot.append(amHours);

		// Create textarea, added content, then appended to parent
		var event = $("<textarea>");
		event.attr("id", "am" + hours[i]);
		amHours.append(event);

		//Create button, add content, append to parent
		var button = $("<button>");
		button.text("LOCK");
		event.append(button);
	}

	for (let i = 0; i < hours.length; i++) {
		// Create div, added content, then appended to parent
		var pmHours = $("<div>");
		pmHours.attr("value", hours[i]);
		pmHours.text(hours[i] + "PM");
		timeSlot.append(pmHours);

		// Create textarea, added content, then appended to parent
		var event = $("<textarea>");

		event.attr("id", "pm" + hours[i]);
		pmHours.append(event);

		// Create button, add content then append to parent
		var button = $("<button>");
		button.text("LOCK");
		event.append(button);
	}
	lockEventBtn.on("click", function () {
		saveEvent();
	});

	eventDiv.on("click", function () {
		console.log("eventDiv here");
	});

	function saveEvent() {
		console.log("Save event here");
	}
});
