import * as data from "../data/characterCards.js";
import * as helper from "./helper.js";
//characterCards left
var DeckLeftCharacter = helper.rnd(0, data.default.characters.length - 1);
var leftCharacter = data.default.characters[DeckLeftCharacter];
var DeckLeft = document.getElementById("left");
//characterCard: right
var DeckRight = document.getElementById("right");
var rightCharacter =
  data.default.characters[
    helper.rnd(0, data.default.characters.length - 1, DeckLeftCharacter)
  ];

DeckLeft.innerHTML +=
  leftCharacter.name +
  '<img src="' +
  leftCharacter.image +
  '" style="outline: 2px solid yellow; max-width:300px"/>' +
  '"<p style="outline: 2px solid yellow;margin-top: -1em;color: white; text-align: left">' +
  "Phi:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  leftCharacter.properties[0] +
  "</br>" +
  "Stärke:&nbsp;&nbsp;&nbsp;" +
  leftCharacter.properties[1] +
  "</br>" +
  "Einfluss:&nbsp;" +
  leftCharacter.properties[2] +
  "</p>";

DeckRight.innerHTML +=
  rightCharacter.name +
  '<img src="' +
  rightCharacter.image +
  '" style="outline: 2px solid blue; max-width:300px"/>' +
  '"<p style="outline: 2px solid blue; margin-top: -1em; color: white; text-align: left">' +
  "Phi:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  rightCharacter.properties[0] +
  "</br>" +
  "Stärke:&nbsp;&nbsp;&nbsp;" +
  rightCharacter.properties[1] +
  "</br>" +
  "Einfluss:&nbsp;" +
  rightCharacter.properties[2] +
  "</br>" +
  "</p>";

var Deck = document.getElementById("deck");

// who has the longest?
Deck.innerHTML += "1. Runde: </br>";

var propRnd = helper.rnd(0, data.default.fields.length - 1);
var fightOutcome = helper.fightOutcome(
  leftCharacter.properties[propRnd],
  rightCharacter.properties[propRnd]
);
Deck.innerHTML +=
  '<span style="color: yellow" >' +
  leftCharacter.name +
  " </span> setzt " +
  data.default.fields[propRnd] +
  ' (<span style="color: yellow"> ' +
  leftCharacter.properties[propRnd] +
  ' </span> ) ein vs. <span style="color: #9ba9e9" >' +
  rightCharacter.name +
  " </span> " +
  data.default.fields[propRnd] +
  ' ( <span style="color: #9ba9e9">' +
  rightCharacter.properties[propRnd] +
  " </span>) </br>" +
  '<span style="color: yellow" >' +
  leftCharacter.name +
  " </span> " +
  fightOutcome +
  ' ! </br> </br><button type="button" onclick="window.location.reload();">Neue Runde</button>' +
  "</br></br><a href=\"https://gadel.org/galerie2.html\">Bilder-Quelle und Lizenz</a></body>";
