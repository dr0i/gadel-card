export function rnd(min, max, not) {
  var res = Math.floor(Math.random() * (max - min + 1) + min);
  while (res === not) {
    res = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return res;
}
export function fightOutcome(leftProp, rightProp) {
    console.log("leftProp:" +leftProp, "rightProp:" + rightProp)

    if (leftProp >= rightProp) {
      return "gewinnt";}
  else return "verliert";
}
