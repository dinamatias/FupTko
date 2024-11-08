 let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd: number = + input();

let qtdChoc: number = 0;
let qtdLim: number = 0;
let qtdManha: number = 0;
let qtdTarde: number = 0;

while (qtd > 0) {

let entrada: string[] = input().split(" ");
    let sabor: string = entrada[0];
    let turno: string = entrada[1];

    if (sabor == "c") {
        qtdChoc++;
    } else if (sabor == "l") {
        qtdLim++;
    } 
    if (turno == "m") {
        qtdManha++;
    } else if (turno == "t") {
        qtdTarde++;
    }

    qtd--;
}

let saborVencedor: string = "";
let turnoPerdedor: string = "";

if (qtdChoc > qtdLim) {
    saborVencedor = "c";
} else if (qtdChoc == qtdLim) {
    saborVencedor = "empate";
} else {
    saborVencedor = "l";
}

if (qtdManha < qtdTarde) {
    turnoPerdedor = "m";
} else if (qtdManha == qtdTarde) {
    turnoPerdedor = "empate";
} else {
    turnoPerdedor = "t";
}

console.log(saborVencedor + ("\n") + turnoPerdedor);

























// let qtd: number = + input();

// let qtdC: number = 0;
// let qtdL: number = 0;

// let qtdM: number = 0;
// let qtdT: number = 0;

// while(qtd > 0) {
//     let entrada: string[] = input().split(" ");
//     let sabor: string = entrada[0];
//     let turno: string = entrada[1];

//     if (sabor == "c") {
//         qtdC++;
//     } else if (sabor == "l") {
//         qtdL++;
//     }

//     if (turno == "m") {
//         qtdM++;
//     } else if (turno == "t") {
//         qtdT++;
//     }
//     qtd--;
//  }

//  let saborVencedor: string = "";
//  let turnoPerdedor: string = "";

//  if (qtdC > qtdL) {
//     saborVencedor = "c";
//  } else if (qtdC == qtdL) {
//     saborVencedor = "empate";
//  } else {
//     saborVencedor = "l"
//  }

//  if (qtdM < qtdT) {
//     turnoPerdedor = "m";
//  } else if (qtdM == qtdT) {
//     turnoPerdedor = "empate"; 
//  } else {
//     turnoPerdedor = "t";
//  }

//  console.log(saborVencedor + "\n" + turnoPerdedor);



let [sabor, turno]: string[] = input().split(" ");

let lista: string[] = input().split(" ");
let sabor: string = lista[0];