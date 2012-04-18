// Author: Kirk Kaminer
// 04/18/2012
// Assignment 3
// JSON

console.log("Our Story Begins with our Group of.....")

// ****** JSON DATA
alert("Project 3!");

var handleData = function (group){
	for (var i = 0; i < group.characters.length; i++){
		var character = group.characters[i];
		console.log("Class: " + character.player +", Race: " + character.race + ", Role: " +
		character.role + ", Level: " + character.level);
	};
};

handleData(group2);

// ****** Boolean argument
var weakTank = true, hitPoints = 1;

if (weakTank === true) {
	console.log("awesome! We have a tank! Our group can win battles...");
	if (hitPoints >= 1) {
		console.log("Hope he is strong"); 
	} else {
		console.log("Awkward!");
	};
} else {
	console.log("look for a better warrior.");
};

var player = function(warrior){
	var level = 10,
		currentLevel, groupGreet;
	if (level < 1){ currentLevel = "noob";}
	else if (level < 10){ currentLevel = "getting better";}
	else{ currentLevel = "noob";}
	groupGreet = "Puny " + currentLevel + ", " + warrior + "!";
	return groupGreet;
}

var almostGood = player("Warrior");
console.log(almostGood);

// ****** Argument Number
var maxLevels = 15;

if (maxLevels === 0) {
	console.log("No point in continuing our journey.");
	if (moreLevels = 5) {
		console.log("YAY! We can continue"); 
	} else {
		console.log("Dead!");
	};
} else {
	console.log("Find a dungeon so we can level up. ");
};

// ****** Number Function
var totalGroupSize = 4;
var highestLevelInGroup = 10;
					
var totalLevels = function() {
	var levels = 2;
	return levels;
};

var LevelsTotal = function(group, levels, message){
	console.log(group + " has gained " + levels + " levels for each player, " + message);
};

var levels = totalLevels(15);
LevelsTotal("The Group", levels, "and has grown stronger.");


console.log("The group will now rest at the inn for awhile.")

// ****** While Loop
var mgwr = 30; 
while (mgwr > 0) {
	console.log(mgwr + " minutes the group has rested at the inn.");
	mgwr--;
};

console.log("The group (meaning the puny noob warrior) needs to go out and level up more.");




