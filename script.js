$(document).ready(function () {
	var amBox = $("#am-hours");
	var pmBox = $("#pm-box");
	var currentDay = $("#currentDay");

	var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	for (let i = 0; i <= hours.length; i++) {
		// Create element
		var amHours = $("<div>");
		// Attach Content
		amHours.addClass("sch-hrs day-hrs");
		amHours.attr("value", hours[i]);
		amHours.text(hours[i]);
		console.log(amHours);

		// Append to existing
		$("#am-hours").append(amHours);

		var event = $("<textarea>");

		event.addClass("add-event");
		event.attr("id", hours[i]);

		amHours.append(event);
	}

	for (let i = 0; i <= hours.length; i++) {
		// Create element
		var pmHours = $("<div>");
		// Attach Content
		pmHours.addClass("sch-hrs night-hrs");
		pmHours.attr("value", hours[i]);
		pmHours.text(hours[i]);
		console.log(pmHours);

		// Append to existing
		$("#pm-hours").append(pmHours);

		var event = $("<textarea>");

		event.addClass("add-event");
		event.attr("id", hours[i]);

		pmHours.append(event);
	}
});
