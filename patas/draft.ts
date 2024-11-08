let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let chuteChicoBento: number = + input();
let chuteCebolinha: number = + input(); 
let qtd: number = + input();
let total: number = 0;

while (qtd > 0) {
    let entrada = input()
    if (entrada == "v") {
        total += 4
    } else if (entrada == "g") {
        total += 2
    } else if (entrada == "c") {
        total += 4
    }
    qtd--;
}

let vencedor: string = "";

if (Math.abs(chuteChicoBento - total) < Math.abs(chuteCebolinha - total)) {
    vencedor = "Chico Bento";
} else if (Math.abs(chuteChicoBento - total) > Math.abs(chuteCebolinha - total)) {
    vencedor = "Cebolinha";
} else {
    vencedor = "empate";
}

console.log(total + "\n" + vencedor);