let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd: number = + input();
let lista: number[] = input().split(" ").map(Number);

if (qtd == 0) {
    console.log("[ ]");
} else {
    console.log("[ " + lista.join(" ") + " ]")
}














// let qtd: number = + input();
// let lista: number[] = input().split(" ").map(Number);

// if (qtd == 0) {
//     write("[ ]")
// } else {
// write("[ " + lista.join(" ") +" ]")
// }












// let qtd: number = + input();
// let lista: number[] = qtd > 0 ? input().split(" ").map(Number) : [];

// if (lista.length === 0) {
//     write("[ ]");
// } else {
//     write("[ " + lista.join(" ") + " ]");
// }

