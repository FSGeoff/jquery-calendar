$(document).ready(function () {
	var timeAndDate = moment().calendar();
	var amBox = $("#am-hours");
	var pmBox = $("#pm-hours");
	var currentDay = $("#currentDay");
	var timeBlock = $("#time-block");
	var eventBox = $("#event-box");
	console.log(timeAndDate);
	console.log(window);

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
		// Create element
		var pmHours = $("<div>");
		// Attach Content
		pmHours.addClass("sch-hrs night-hrs");
		pmHours.attr("value", hours[i]);
		pmHours.text(hours[i] + "PM");

		// Append to existing
		pmBox.append(pmHours);

		var event = $("<textarea>");
		event.css("background-color", "grey");
		event.css("width", "100%");
		event.addClass("add-event");
		event.attr("id", hours[i]);

		pmBox.append(event);
	}
	amBox.on("click", function () {
		console.log("am-box");
	});

	pmBox.on("click", function () {
		console.log("pm-box");
	});
});
