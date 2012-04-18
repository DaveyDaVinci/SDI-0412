// Author: Kirk Kaminer
// 04/18/2012
// Assignment 3
// JSON

alert("Project 3!");

var handleData = function (group){
	for (var i = 0; i < group.characters.length; i++){
		var character = group.characters[i];
		console.log("Class: " + character.player +", Role: " + character.role + ", Level: " +
		character.level);
	};
};

handleData(group2);