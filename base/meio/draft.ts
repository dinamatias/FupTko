let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let a = + input();
let b = + input();
let c = + input();

if (a > b && a < c || a < b && a > c) {
    write(a);
} else if (b > a && b < c || b < a && b > c) {
    write(b);
} else { 
    write(c);
}