$(document).ready(function () {
	var date = moment().format("LL");
	var timeNow = moment().format("LT");
	var withinHour = moment().startOf("hour").fromNow();

	$("#currentDay").text(date);
	$("#currentTime").text(timeNow);

	// localStorage.getItem("eventText");

	var appointments = [
		{ timeString: "9AM", timeNumber: 9 },
		{ timeString: "10AM", timeNumber: 10 },
		{ timeString: "11AM", timeNumber: 11 },
		{ timeString: "12PM", timeNumber: 12 },
		{ timeString: "1PM", timeNumber: 13 },
		{ timeString: "2PM", timeNumber: 14 },
		{ timeString: "3PM", timeNumber: 15 },
		{ timeString: "4PM", timeNumber: 16 },
		{ timeString: "5PM", timeNumber: 17 },
	];

	for (let i = 0; i < appointments.length; i++) {
		var time = appointments[i];
		//Creates div to hold time, appointment, and save button
		var timeSlot = $("<div>");
		timeSlot.attr("class", "row");

		//Create column(1) to hold time
		var timeSpan = $("<span>");
		timeSpan.attr("class", "hour col-sm-1");
		timeSpan.text(time.timeString);
		timeSlot.append(timeSpan);

		//Create column(10) to hold appointment text
		var textContent = $("<textarea>");
		textContent.attr("class", "description col-sm-10");
		textContent.attr("id", "event-text"[i]);
		// textContent.text(localStorage.getItem("eventText"[i]));
		timeSlot.append(textContent);
		console.log(textContent);
		//Get object back
		//access objects properties
		// console.log(JSON.parse(localStorage.getItem("hours")));

		//Create a column(1) for a save button
		var button = $("<button>");
		button.attr("class", "saveBtn col-sm-1 fas fa-save");

		timeSlot.append(button);

		//Append entire div to container in html
		$("#time-block").append(timeSlot);

		//Checks to see current time and adds class accordingly
		var hourNow = parseInt(time.timeNumber);

		if (
			hourNow === parseInt(timeNow) ||
			hourNow === parseInt(timeNow) + 12
		) {
			textContent.addClass("present");
		} else if (
			hourNow <= parseInt(timeNow) ||
			hourNow - 12 <= parseInt(timeNow)
		) {
			textContent.addClass("past");
		} else {
			textContent.addClass("future");
		}
		//Listen for a click from the save button
		//and save to local storage
		$("button").on("click", function () {
			var eventText = $(this).siblings("textarea").val();
			//what object key are we saving too
			// localStorage.setItem("eventText", eventText);
			var hours = { "9AM": "test " };
			localStorage.setItem("hours", JSON.stringify(hours));
			// console.log(eventText);
		});
	}
});
