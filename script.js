$(document).ready(function () {
	var date = moment().format("L");
	var timeNow = moment().format("LT");
	var withinHour = moment().startOf("hour").fromNow();
	console.log(withinHour);

	var timeSlot = $("#left");
	var eventDiv = $("#middle");
	var lockEventBtn = $("#right");

	$("#currentDay").text(date);
	$("#currentTime").text(timeNow);

	localStorage.getItem("event");

	var appointments = [
		{ timeString: "9AM", timeNumber: 9 },
		{ timeString: "10AM", timeNumber: 10 },
		{ timeString: "11AM", timeNumber: 11 },
		{ timeString: "12PM", timeNumber: 12 },
		{ timeString: "1PM", timeNumber: 1 },
		{ timeString: "2PM", timeNumber: 2 },
		{ timeString: "3PM", timeNumber: 3 },
		{ timeString: "4PM", timeNumber: 4 },
		{ timeString: "5PM", timeNumber: 5 },
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

		//Create column(10) to hold appointment ext
		var textContent = $("<textarea>");
		textContent.attr("class", "description col-sm-10");
		timeSlot.append(textContent);

		//Create a column(1) for a save button
		var button = $("<button>");
		button.attr("class", "saveBtn col-sm-1");
		button.text("SAVE");
		timeSlot.append(button);

		//Append entire div to container in html
		$("#time-block").append(timeSlot);

		//Checks to see current time and adds class accordingly
		var hourNow = parseInt(time.timeNumber);
		console.log(hourNow);
		if (hourNow === parseInt(timeNow)) {
			textContent.addClass("present");
		} else if (hourNow <= parseInt(timeNow)) {
			textContent.addClass("past");
		} else {
			textContent.addClass("future");
		}
		//Listen for a click from the save button
		//and save to local storage
		$(".saveBtn").on("click", function () {
			console.log("save here");
			localStorage.setItem("event", textContent.textContent);
		});
	}
});
