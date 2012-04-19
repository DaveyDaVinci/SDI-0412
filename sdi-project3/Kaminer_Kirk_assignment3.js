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
	if (moreLevels = 0) {
		console.log("YAY! We can continue"); 
	} else {
		console.log("Dead!");
	};
} else {
	console.log("They begin there quest. ");
};

var group ={
	name:"The Furious Few",
	quest: function(quest){
		console.log("The " + name + " ventures out for a fight.")
	}
};
group.quest(true);

// while loop
var mghq = 5;  // mghq: minutes group has quested
while (mghq > 0) {
	console.log(mghq + " minutes have past.");
	mghq--;
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

// array argument
var player1 = "healer",
	player2 = "warrior",
	player3 = "mage",
	player4 = "thief"
;

var race = [
	"human's",
	"dwarf's",
	"gnome's",
	"dark elf's"
];

var adjectives = [
	"heals other players.",
	"attempts to tank monsters",
	"uses area of effect spells",
	"steals gold"
];

for (var i=0, j=race.length; i < j; i++){
	console.log( "The " + race[i] + " role was to " + adjectives[i] );
};


//using your code from ichat

var obj = {
	haveMail: true,
	getMail: function (mail){
		if (mail === true){
			console.log("Yay, got my mail.")
		} else {
			console.log("Boo, no mail for me.")
		};
	}
};

obj.getMail(obj.haveMail);
