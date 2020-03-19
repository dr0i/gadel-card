export function rnd(min,max,not){
    var res=Math.floor(Math.random()*(max-min+1)+min );
    console.log("res: "+ res +", not" + not)
    while ( res === not) {
        console.log("res: "+ res +" == not:" + not)
        res=Math.floor(Math.random()*(max-min+1)+min );
    }
    return res;
   
}