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

	var appointments = [
		{ timeString: "9AM", timeNumber: 9 },
		{ timeString: "10AM", timeNumber: 10 },
		{ timeString: "11AM", timeNumber: 11 },
		{ timeString: "12PM", timeNumber: 12 },
		{ timeString: "1PM", timeNumber: 13 },
		{ timeString: "2PM", timeNumber: 14 },
		{ timeString: "3AM", timeNumber: 15 },
		{ timeString: "4PM", timeNumber: 16 },
		{ timeString: "5PM", timeNumber: 17 },
	];

	for (let i = 0; i < appointments.length; i++) {
		var time = appointments[i];

		var timeSlot = $("<div>");
		timeSlot.attr("class", "row");
		var timeSpan = $("<span>");
		timeSpan.attr("class", "hour col-sm-1");

		timeSpan.text(time.timeString);
		timeSlot.append(timeSpan);
		var textContent = $("<textarea>");
		textContent.attr("class", "description col-sm-10");
		timeSlot.append(textContent);
		var button = $("<button>");
		button.attr("class", "saveBtn col-sm-1");
		button.text("LOCK");
		timeSlot.append(button);
		$("#time-block").append(timeSlot);

		var hourNow = time.timeNumber;
		if (hourNow === timeNow) {
			textContent.addClass("present");
		} else if (hourNow <= timeNow) {
			textContent.addClass("past");
		} else {
			textContent.addClass("future");
		}
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
