let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

let [h, p, f, d]: number[] = input().split(" ").map(Number)

while(true) {
    if (f == h) {
        write("S");
        break;
    } else if (f == p) {
        write("N");
        break;
    } if (d == -1) {
        f--;
        if (f < 0) {
            f = 15;
        }
    } else {
        f++;
        if (f > 15) {
            f = 0;
        }
    }
} 


















// let entrada: string[] = input().split(" ");
// let h: number = +entrada[0];
// let p: number = +entrada[1];
// let f: number = +entrada[2];
// let d: number = +entrada[3];

// while(true) {
//     if (f == h) {
//         console.log("S");
//         break;
//     } else if (f == p) {
//         console.log("N");
//         break;
//     }
//     if (d == -1) {
//         f--;
//         if (f < 0) {
//             f = 15;
//         }
//     } else {
//         f++;
//         if (f > 15) {
//             f = 0;
//         }
//     }
// }
































// let entrada: string[] = input().split(" ");

// let h: number = + entrada[0];
// let p: number = + entrada[1];
// let f: number = + entrada[2];
// let d: number = + entrada[3];

// if (d == -1) {
//     while(true) {
//         if (f == h) {
//             console.log("S");
//             break;
//         } else if (f == p) {
//             console.log("N");
//             break;
//         }
//         f--;
//         if (f == -1) {
//             f = 15;
//         }
//     }
// }

// else {
//     while(true) {
//         if (f == h) {
//             console.log("S");
//             break;
//         } else if (f == p) {
//             console.log("N");
//             break;
//         }
//         f++;
//         if (f == 16) {
//             f = 0;
//         }
//     }
// }
