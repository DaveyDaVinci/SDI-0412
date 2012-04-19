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

// ****** Argument: Boolean
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

// ****** Output
var hitPoints = 1,
	level = 15,
	total = level * 1,
	damage
;

damage = hitPoints * 15;


console.log( "warriors hit points = ", total + " as of now." );

var player = function(warrior){
	var level = 10,
		currentLevel, groupGreet;
	if (level < 1){ currentLevel = "noob";}
	else if (level < 10){ currentLevel = "getting better";}
	else{ currentLevel = "noob";}
	groupGreet = "Puny " + currentLevel + ", " + warrior + "!";
	return groupGreet;
}

// ****** Argument: Number
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

console.log("The group needs to level up more.");

// ****** Output
var warriorsLevel = 3,
	levelsNeeded = 12,
	levelsToGo
;

levelsToGo = warriorsLevel + levelsNeeded;


console.log( "Our puny warrior is now level 3 but needs to reach level ", levelsToGo + ", and fast." );

// ****** Argument: Object
var objName = {
	warrior: "getting stronger",
	level: 3,
	levelsNeeded: [12]
};

if(warriorsLevel === 3){
	console.log("he is getting stronger.");
}
else(levelsToGo === 12);{
	console.log("but has 12 more levels to go before the group can take on the Minotaur.");
}

console.log("Puny warrior drinks a mug of ale!")

// ****** For Loop
for (var levels = 12; levels >= 3; levels--) {
	console.log(levels + " levels remain before he hits....");
};

console.log("Like magic, the puny warrior dings at level 15.");



/* Examples for methods:

var encounter = {
	bossName: "Herp",
	bossHp: function (callOutsideObject){
		thisfunctiondoessomething
	}
};

encounter.bossHp(callOutsideObject);
*/