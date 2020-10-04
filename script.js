$(document).ready(function () {
	var timeAndDate = moment().calendar();
	var time = moment().format("LT");
	var amBox = $("#am-hours");
	var pmBox = $("#pm-hours");
	var currentDay = $("#currentDay");
	var timeBlock = $("#time-block");
	var eventBox = $("#event-box");
	var eventBtn = $("#event-btn");
	console.log(timeAndDate);
	console.log(time);

	var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	for (let i = 0; i < hours.length; i++) {
		// Create element
		var amHours = $("<div>");
		// Attach Content
		amHours.addClass("sch-hrs day-hrs");
		amHours.attr("value", hours[i]);
		amHours.text(hours[i] + "AM");

		// Append to existing
		amBox.append(amHours);

		var event = $("<textarea>");
		event.css("background-color", "grey");
		event.css("width", "100%");
		event.addClass("add-event");
		event.attr("id", hours[i]);

		amBox.append(event);
	}

	for (let i = 0; i < hours.length; i++) {
		// Create div, added content, then appended to pmBox
		var pmHours = $("<div>");
		pmHours.addClass("sch-hrs night-hrs");
		pmHours.attr("value", hours[i]);
		pmHours.text(hours[i] + "PM");
		pmBox.append(pmHours);

		// Create textarea, added content, then appended to pmBox
		var event = $("<textarea>");
		// Create button, add content then append to ...
		var button = $("<button>");
		button.css("class", "btn btn-info");
		button.css("color", "blue");
		button.css("float", "right");
		button.text(hours[i]);
		pmBox.append(button);

		event.css("background-color", "grey");
		event.css("width", "100%");
		event.addClass("add-event");
		event.attr("id", hours[i]);
		pmBox.append(event);

		// // Create button, add content then append to ...
		// var button = $("<button>");
		// button.css("class", "btn btn-info");
		// button.text(hours[i]);
		// eventBtn.append(button);
	}
	amBox.on("click", function () {
		saveEvent();
	});

	pmBox.on("click", function () {
		saveEvent();
	});

	function saveEvent() {
		console.log("Save event here");
	}
});
