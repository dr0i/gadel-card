export function rnd(min, max, not) {
  var res = Math.floor(Math.random() * (max - min + 1) + min);
  while (res === not) {
    res = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return res;
}
export function fightOutcome(leftProp, rightProp) {
  if (leftProp >= rightProp) {
    return "gewinnt";
  } else return "verliert";
}

// only two are fighting atp
// returns true if left's ini better
export function getInitiative(leftIniMalus, rightIniMalus) {
  var ini = [rnd(1, 10) + leftIniMalus, rnd(1, 10) + rightIniMalus];
  if (ini[0] >= ini[1]) {
    console.log(
      "left begins with ini: " + ini[0] + " agains right ini:" + ini[1]
    );
  } else console.log("right begins");
  return ini;
}
