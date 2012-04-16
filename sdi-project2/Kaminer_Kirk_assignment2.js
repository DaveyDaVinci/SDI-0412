// Author: Kirk Kaminer
// 04/04/2012
// Assignment 2
// The not so proud of Challenge.

alert("Project 2!");

// Variables
var self = "Wes",
	wow = "World of Warcraft"
	system = "Xbox"
;

	console.log(self + " no longer plays " + wow + ". He plays " + system + " instead.")
;
// Boolean logic
// c: code, w: world of warcraft, r: rest more
var  c = true, w = false, r = false; 

console.log("WOWing these days equals a big " + ((c && w) || r));

// Boolean
var quitPlaying = true, time = 1;

if (quitPlaying === true) {
	console.log("Wes likes to wake up and play XboX for a few hours.");
	if (time >= 1) {
		console.log("He will only play for 2 hours though."); 
	} else {
		console.log("He's not the best at code.");
	};
} else {
	console.log("He could get better by practicing.");
};

// Argument
var playingXbox = ["Gears of War", "Call of Duty", "Skyrim", "BattleField" ],
	entireTimePlaying = [ 30, 25, 40, 25 ];
var oneGame = function(xboxGame, thisGameMins) {
	console.log("Wes inserts disc: " + xboxGame + ", to play for "
		+ thisGameMins + " minutes.");
	for(var minutes = 0; minutes < thisGameMins; minutes += 5) {
		var minutesRemain = thisGameMins - minutes;
		console.log(minutes + " done, " + minutesRemain + " to go!");
	}
	console.log("Finishes playing " + xboxGame + ".");
};
var multipleGames = function(xboxGames, gamesMinutes){
	for (var gameNum = 0; gameNum < xboxGames.length; gameNum++) {
		var xboxGame = xboxGames[gameNum],
			thisGameMins = gamesMinutes[gameNum];
		oneGame(xboxGame, thisGameMins);	
	} // for gameNum
}; // multipleGames
// encapsulation
multipleGames(playingXbox, entireTimePlaying);

// Number Function
var hours = 2;
var minutes = 120;
						// r is the argument.
var getTime = function (arg) {
	var hours = 60 + 60;
	return hours;
};

var timeTotal = function(name, hours, message){
	console.log(name + " has spent " + hours + " minutes playing XboX and " + message);
};
		           // "()" is the argument.
var hours = getTime(10);
timeTotal("Wes", hours, "is done playing.");


console.log("Wes will now code for 10 hours.")

// Loop
var hoursOnCode = 10;
while (hoursOnCode > 0) {
	console.log(hoursOnCode + " Hours left to work on code.");
	hoursOnCode--;
};

console.log("Hours are up. He can rest for awhile.");

// String Function

var a = "email",
	b = "twitter",
	c = "iPhone",
 	d = "code";
;

console.log("Will Wes check " + a + ", " +  b + " or " + c + " first? Or just " + d + " when he is done resting?");

// Array Function

var check = [
	"emails",
	"twitter",
	"iPhone",
	"code"
];

var adjectives = [
	" so his inbox wont over flow.",
	" because its the trendy thing to do.",
	" because he is so popular.... NOT!",
	" first, because he wants to pass SDI."
];


for (var i=0, j=check.length; i < j; i++) {
	console.log( "Wes checks " + check[i] +  adjectives[i] );
};

// Returned Values
var sleep = function(timeSpent) {
	var timeSpentSleeping = 7, 
		allNight;
	if (timeSpent < timeSpentSleeping) {
		console.log("Wes should sleep now?");
		allNight = 8;
	}
	else {
		allNight = Math.floor(timeSpent / timeSpentSleeping);
	}
	return allNight; 
};

var getRest = sleep(1);

		var  t = true, s = true, e = false, r = false; 
			console.log(!r && !e) || (!s && !t);

console.log("Wes gets a full " + getRest + " hours of sleep!");

// Output
var minutes = 60,
	hours = 20,
	total = hours * 60,
	time
;

time = minutes * hours;


console.log( "time:", total + " minutes spent throughout the day doing something productive." );

// Finish!
console.log("Wes has 240 minutes of free time left to himself.")