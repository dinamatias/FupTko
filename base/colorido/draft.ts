let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let N: number = + input();
let pe: string = input();

let saida: string = "";

for(let i = 0; i <= 10; i++) {
    if (i != N) { 
        if (i == 10) {
            saida += "ceu ";
        } else {
            saida += i + pe + " ";
            if (pe == "d") {
                pe = "e";
            } else {
                pe = "d";
            }
        }
    } 
}

console.log("[ " + saida + "]");

 