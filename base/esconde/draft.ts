let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n: number = + input();

for (let i = 0; i <= n; i++) {
    if (i%2 !== 0) {
        write(i);
    }
}

for (let i = n; i >= 0; i--) {
    if (i%2 == 0) {
        write(i);
    }
}
















// let n: number = + input();

// for(let i = 0; i <= n; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

// for(let i = n; i >= 0; i--) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// } 