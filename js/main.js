console.log("connected");


// Date() objects


var now = new Date();


// to get the hour of the day
// now.gethours()

// this will get the current minure of the hour
// now.getMinutes()

// this will get the current seconds of the minute
// now.getSeconds()

// this returns the index of the day of the week ie: sunday is 0, monday is at 1 index, etc.
// now.getDay()

// this will return the index of the current month ie: January is at 0 index, December is at 11 index
// now.getMonth()

// this will return the year, year zero is 1900
// now.getYear()
// this will return to give current year on calendar
// now.getFullYear()

// learn to use these indexes to create timestamps
// check W3School for other time methods and how to use



// to show time stamp in this format hh:mm:ss

// this way of doing uses too much code; cleaner code alternative below
// var hh = now.getHours();
// var mm = now.getMinutes();
// var ss = now.getSeconds();


// if (hh < 10) {
// 	hh = "0" + hh;
// }

// if (mm < 10) {
// 	mm = "0" + mm;
// }

// if (ss < 10) {
// 	ss = "0" + ss;
// }

// functionally cleaner version of code to get timestamp in hh:mm:ss format
var hh = formatTime(now.getHours());
var mm = formatTime(now.getMinutes());
var ss = formatTime(now.getSeconds());

function formatTime(timeDenom) {
	if(timeDenom < 10) {
		return "0" + timeDenom;
	} else {
		return timeDenom;
	}

}

console.log(now.getHours() + ":" + now.getMinutes().toFixed(2) + ":" + now.getSeconds());

// .toFixed(2) makes it so that minutes display in 2 digits at all times


// create date object + countdown
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d - now);

// more on the above on W3Schools



















