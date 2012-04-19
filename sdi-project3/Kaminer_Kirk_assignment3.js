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

// boolean argument
var players = (true),
	name = "Furious Few";
if (players)
console.log( "Great! We have our " + name);
else{
	console.log("Where did everyone go?");
}

// output
var groupAmount = 4,
	hp = 1,
	weakGroup = groupAmount * 1,
	damage
;
damage = hp * 15;

console.log( "The warriors hit points = ", damage + " though." );

// return
var buyArmor = function(gold) {
	var priceForArmor = 20, 
		bronzeArmor;
	if (gold < priceForArmor) {
		console.log("NOT ENOUGH GOLD!");
		bronzeArmor = 1;
	}
	else {
		bronzeArmor = Math.floor(gold / priceForArmor);
	}
	return bronzeArmor; 
};

var armorGot = buyArmor(20);
console.log("The group bought " + armorGot + " suit of armor for the warrior.");

// number argument
var maxLevels = 15;

if (maxLevels === 0) {
	console.log("No point in continuing our quest.");
	if (moreLevels = 5) {
		console.log("YAY! We can continue"); 
	} else {
		console.log("Dead!");
	};
} else {
	console.log("Find a dungeon so we can level up. ");
};

var group ={
	name:"The Furious Few",
	quest: function(quest){
		console.log("The " + name + " begins there quest.")
	}
};
group.quest(true);

// while loop
var mgwr = 5; 
while (mgwr > 0) {
	console.log(mgwr + " minutes have past.");
	mgwr--;
};

console.log("The groups dexterity drains.");

// output
var dexAmount = 0,
	weakGroup = dexAmount * 1,
	lol
;
lol = weakGroup;

console.log( "All of The Furious Fews dexterity drops to ", lol + "." );

// return
var dexNeeded = function(dex) {
		dex = 0;	
		return dex; 
};

// object argument
var player1 = { role: "healer", hp: 50, mp: 500, dex: 0 };
var player2 = { role: "warrior", hp: 15, mp: 10, dex: 0 };
var player3 = { role: "mage", hp: 60, mp: 700, dex: 0 };
var player4 = { role: "thief", hp: 150, mp: 100, dex: 0 };

function groupStats(){
	console.log(this.role + " has stats of " +
		"hp:" + this.hp + " mp:" + this.mp + " dex:" + this.dex + "!");
};

player1.details = groupStats;
player2.details = groupStats;
player3.details = groupStats;
player4.details = groupStats;

player1.details();
player2.details();
player3.details();
player4.details();

// ****** For Loop
for (var secs = 5; secs >= 0; secs--) {
	console.log(secs + " seconds");
}

console.log("The Furious Few all faint due to fatigue.");

// return
var dexNeeded = function(dex) {
		dex = 1;	
		return dex; 
};
