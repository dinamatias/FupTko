let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let jogador1 = input();
let jogador2 = input();

if (jogador1 == "R" && jogador2 == "S") {
    console.log("jog1");
} else if (jogador1 == "S" && jogador2 == "P") {
    console.log("jog1")
} else if (jogador1 == "P" && jogador2 == "R") {
    console.log("jog1");
} else if (jogador1 == jogador2) {
    console.log("empate");
} else {
    console.log("jog2");
}