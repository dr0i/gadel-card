import * as data from "../data/characterCards.js";
import * as helper from "./helper.js";
//characterCards left
var DeckLeftCharacter = helper.rnd(0, data.default.characters.length - 1);
var leftCharacter = data.default.characters[DeckLeftCharacter];
var DeckLeft = document.getElementById("left");
//characterCard: right
var DeckRight = document.getElementById("right");
var DeckRightCharacter = helper.rnd(
  0,
  data.default.characters.length - 1,
  DeckLeftCharacter //no one should fight against themself
);
var rightCharacter = data.default.characters[DeckRightCharacter];

// the two fighters as cards
var characters = [DeckLeftCharacter, DeckRightCharacter];
var ini = helper.getInitiative(
  data.default.characters[characters[0]].weapons[0].attributes[4],
  data.default.characters[characters[1]].weapons[0].attributes[4]
);
if (ini[0] >= ini[1]) {
  var first = 0;
  var second = 1;
} else {
  var first = 1;
  var second = 0;
}
var color = ["yellow", "#9ba9e9"];

console.log(characters[0] + ";" + characters[1]);
DeckLeft.innerHTML +=
  data.default.characters[characters[0]].name +
  '<img src="' +
  data.default.characters[characters[0]].image +
  '" style="outline: 2px solid ' +
  color[first] +
  '; max-width:300px"/>' +
  '"<p style="outline: 2px solid ' +
  color[first] +
  ';margin-top: -1em;color: white; text-align: left">' +
  "Phi:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  data.default.characters[characters[0]].attributes[0] +
  "</br>" +
  "Stärke:&nbsp;&nbsp;&nbsp;" +
  data.default.characters[characters[0]].attributes[1] +
  "</br>" +
  "Einfluss:&nbsp;" +
  data.default.characters[characters[0]].attributes[2] +
  "</p>";
DeckRight.innerHTML +=
  data.default.characters[characters[1]].name +
  '<img src="' +
  data.default.characters[characters[1]].image +
  '" style="outline: 2px solid blue; max-width:300px"/>' +
  '"<p style="outline: 2px solid blue; margin-top: -1em; color: white; text-align: left">' +
  "Phi:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  data.default.characters[characters[1]].attributes[0] +
  "</br>" +
  "Stärke:&nbsp;&nbsp;&nbsp;" +
  data.default.characters[characters[1]].attributes[1] +
  "</br>" +
  "Einfluss:&nbsp;" +
  data.default.characters[characters[1]].attributes[2] +
  "</p>";

var Deck = document.getElementById("deck");

// who has the longest?
Deck.innerHTML += "Physischer Nahkampf </br>";

//var useAttribute = helper.rnd(0, data.default.attributes.length - 1);
var useAttribute = 1;

// var fightOutcome = helper.fightOutcome(
//   data.default.characters[characters[first]].attributes[useAttribute],
//   data.default.characters[characters[second]].attributes[useAttribute]
// );

Deck.innerHTML +=
  '<span style="color: ' +
  color[first] +
  '" >' +
  data.default.characters[characters[first]].name +
  ' </span> gewinnt die Initiative mit (<span style="color: ' +
  color[first] +
  '"> ' +
  ini[first] +
  '</span>) vs. (<span style="color: ' +
  color[second] +
  '" > ' +
  ini[second] +
  "</span>) </br>" +
  "und setzt " +
  data.default.attributes[useAttribute] +
  ' (<span style="color: ' +
  color[first] +
  '"> ' +
  data.default.characters[characters[first]].attributes[useAttribute] +
  ' </span> ) ein vs. <span style="color: ' +
  color[second] +
  '" >' +
  data.default.characters[characters[second]].name +
  " </span> " +
  data.default.attributes[useAttribute] +
  ' ( <span style="color: ' +
  color[second] +
  '">' +
  data.default.characters[characters[second]].attributes[useAttribute] +
  " </span>) </br>" +
  '<span style="color: ' +
  color[first] +
  '" >' +
  data.default.characters[characters[first]].name +
  " </span> " +
  // fightOutcome +
  ' ! </br> </br><button type="button" onclick="window.location.reload();">Neue Runde</button>' +
  '</br></br><a href="https://gadel.org/galerie2.html">Bilder-Quelle und Lizenz</a></body>';
