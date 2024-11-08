let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let valor = + input();
let fator: number = 2;

while(valor > 1) {
    let contador: number = 0; 

    while (valor % fator == 0) {
        valor = valor/fator
        contador++;
    }

    if (contador > 0) {
        console.log(fator, contador);
    } 
    
    fator += 1;
}













// let valor: number = + input();
// let fator: number = 2;

// while(valor > 1) {
//     let contador: number = 0;
//     while (valor % fator == 0) {
//         valor = valor / fator;
//         contador += 1
//     } if (contador > 0) {
//         console.log(fator, contador);
//     } fator += 1;
// }
    



















