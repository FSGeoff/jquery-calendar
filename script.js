$(document).ready(function () {
	var date = moment().format("L");
	var time = moment().format("LT");
	var amBox = $("#left");
	var eventDiv = $("#middle");
	var lockEventBtn = $("#right");

	var currentDay = $("#currentDay");
	var currentTime = $("#currentTime");

	currentDay.text(date);
	currentTime.text(time);

	console.log(date);
	console.log(time);

	var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	for (let i = 0; i < hours.length; i++) {
		// Create div, added content, then appended to parent
		var amHours = $("<div>");
		amHours.addClass("sch-hrs day-hrs");
		amHours.attr("value", hours[i]);
		amHours.css("height", "60px");
		amHours.css("padding", "5px");
		amHours.text(hours[i] + "AM");
		amBox.append(amHours);

		// Create textarea, added content, then appended to parent
		var event = $("<textarea>");
		event.css("background-color", "grey");
		event.css("width", "100%");
		event.css("height", "60px");
		event.addClass("add-event");
		event.attr("id", "pm" + hours[i]);
		eventDiv.append(event);
		// Create button, add content then append to parent

		// Create div, added content, then appended to parent

		var button = $("<button>");
		button.css("class", "btn btn-info");
		button.css("color", "blue");
		button.css("float", "right");
		button.css("height", "60px");
		button.text("LOCK");
		lockEventBtn.append(button);

		console.log(event);
	}

	for (let i = 0; i < hours.length; i++) {
		// Create div, added content, then appended to parent
		var pmHours = $("<div>");
		pmHours.addClass("sch-hrs night-hrs");
		pmHours.attr("value", hours[i]);
		pmHours.text(hours[i] + "PM");
		amBox.append(pmHours);

		// Create textarea, added content, then appended to parent
		var event = $("<textarea>");
		event.css("background-color", "grey");
		event.css("width", "100%");
		event.addClass("add-event");
		event.attr("id", "pm" + hours[i]);
		eventDiv.append(event);

		// Create button, add content then append to parent
		var button = $("<button>");
		button.css("class", "btn btn-info");
		button.css("color", "blue");
		button.css("float", "right");
		button.text("LOCK");
		lockEventBtn.append(button);
	}
	amBox.on("click", function () {
		saveEvent();
	});

	function saveEvent() {
		console.log("Save event here");
	}
});
