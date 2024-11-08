let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let qtd: number = +input();

for (let i = 0; i < qtd; i++) {
    let entrada: string = input();
    let qtdLeds: number = 0;

    for (let j = 0; j < entrada.length; j++) {
        if (entrada[j] == "1") {
            qtdLeds += 2;
        } else if (entrada[j] == "2" || entrada[j] == "3" || entrada[j] == "5") {
            qtdLeds += 5;
        } else if (entrada[j] == "4") {
            qtdLeds += 4;
        } else if (entrada[j] == "7") {
            qtdLeds += 3;
        } else if (entrada[j] == "8") {
            qtdLeds += 7;
        } else if (entrada[j] == "9" || entrada[j] == "0") {
            qtdLeds += 6;
        } else if (entrada[j] == "6") {  
            qtdLeds += 6;
        }
    }
    write(qtdLeds + " leds");  
}

