$(document).ready(function () {
	var date = moment().format("L");
	var time = moment().format("LT");
	var amBox = $("#event-hours");

	var currentDay = $("#currentDay");
	var timeBlock = $("#time-block");

	currentDay.text(date);

	console.log(date);
	console.log(time);

	var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	for (let i = 0; i < hours.length; i++) {
		// Create div, added content, then appended to pmBox
		var amHours = $("<div>");
		amHours.addClass("sch-hrs day-hrs");
		amHours.attr("value", hours[i]);
		amHours.text(hours[i] + "AM");
		amBox.append(amHours);

		// Create textarea, added content, then appended to pmBox
		var event = $("<textarea>");
		// Create button, add content then append to ...
		var button = $("<button>");
		button.css("class", "btn btn-info");
		button.css("color", "blue");
		button.css("float", "right");
		button.text(hours[i]);
		amBox.append(button);

		event.css("background-color", "grey");
		event.css("width", "100%");
		event.addClass("add-event");
		event.attr("id", "pm" + hours[i]);

		amBox.append(event);

		console.log(event);
	}

	for (let i = 0; i < hours.length; i++) {
		// Create div, added content, then appended to pmBox
		var pmHours = $("<div>");
		pmHours.addClass("sch-hrs night-hrs");
		pmHours.attr("value", hours[i]);
		pmHours.text(hours[i] + "PM");
		amBox.append(pmHours);

		// Create textarea, added content, then appended to pmBox
		var event = $("<textarea>");
		// Create button, add content then append to ...
		var button = $("<button>");
		button.css("class", "btn btn-info");
		button.css("color", "blue");
		button.css("float", "right");
		button.text(hours[i]);
		amBox.append(button);

		event.css("background-color", "grey");
		event.css("width", "100%");
		event.addClass("add-event");
		event.attr("id", "pm" + hours[i]);
		amBox.append(event);
	}
	amBox.on("click", function () {
		saveEvent();
	});

	function saveEvent() {
		console.log("Save event here");
	}
});
