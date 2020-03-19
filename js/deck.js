import * as data from '/gadel-card/data/characterCards.js';
import * as helper from '/gadel-card/js/helper.js';
//characterCards: left
console.log("DeckLeftCharacter");
var DeckLeftCharacter = helper.rnd(0,2);
var DeckLeft = document.getElementById("left");
DeckLeft.innerHTML += data.default.characters[DeckLeftCharacter].name 
+'<img src="' + data.default.characters[DeckLeftCharacter].image +'" style="max-width:300px"/>'
+ '"<p style="margin-top: -1em;color: white; text-align: left">' 
+ "Phi:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + data.default.characters[DeckLeftCharacter].properties[0]  + "</br>"
+ "Stärke:&nbsp;&nbsp;&nbsp;" + data.default.characters[DeckLeftCharacter].properties[1]  + "</br>"
+ "Einfluss:&nbsp;" + data.default.characters[DeckLeftCharacter].properties[2]
+ '</p>';
//characterCards: right
var DeckRight = document.getElementById("right");
console.log("DeckRightCharacter");
var DeckRightCharacter = helper.rnd(0,2,DeckLeftCharacter);
console.log("DeckRightCharacter:" + DeckRightCharacter);

DeckRight.innerHTML += data.default.characters[DeckRightCharacter].name 
+'<img src="' + data.default.characters[DeckRightCharacter].image +'" style="max-width:300px"/>'
+ '"<p style="margin-top: -1em; color: white; text-align: left">' 
+ "Phi:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + data.default.characters[DeckRightCharacter].properties[0] + "</br>"
+ "Stärke:&nbsp;&nbsp;&nbsp;" + data.default.characters[DeckRightCharacter].properties[1] + "</br>"
+ "Einfluss:&nbsp;" + data.default.characters[DeckRightCharacter].properties[2] + "</br>"
+ '</p>';

var Deck = document.getElementById("deck");

// who has the longest?
Deck.innerHTML += "1. Runde: </br>" ;


Deck.innerHTML + data.default.characters[0].properties[0] +" vs. " + data.default.characters[1].properties[0]; 

