let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let n: number = +input();
let ganhador: number = -1;
let melhorDist: number = 0;

for (let i = 0; i < n; i++) {
    let [A, B]: number[] = input().split(" ").map(Number);
    
    if (A >= 10 && B >= 10) {
        let dist: number = Math.abs(A - B);
        
        if (ganhador === -1 || dist < melhorDist) {
            ganhador = i;
            melhorDist = dist;
        }
    }
}

if (ganhador !== -1) {
    console.log(ganhador);
} else {
    console.log("sem ganhador");
}
