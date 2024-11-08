
function get_men(vet: number[]): number[] {
    let homens: number[] = [];

    for (let elem of vet) {
        if (elem > 0) {
            homens.push(elem);
        }
    } return homens;
}

function get_calm_women(vet: number[]): number[] {
    // let calmWomen: number[] = [];
    // for (let elem of vet) {
    //     if (elem < 0 && elem > -10) {
    //         calmWomen.push(elem);
    //     }
    // } return calmWomen;

    return vet.filter(x => x < 0 && x > -10);
}

function sort(vet: number[]): number[] {
    let aux = vet.slice();
    aux = vet.sort((a, b) => a - b);
    return aux;
}

function sort_stress(vet: number[]): number[] {
    vet.sort((a, b) => Math.abs(a) - Math.abs(b));
    return vet;
}


function reverse(vet: number[]): number[] {
    // let output: number[] = [];
    // for (let elem of vet)
    //     output.unshift(elem);
    // return output;
    return vet.reverse();
}

function unique(vet: number[]): number[] {
    let unicos: number[] = [];

    // for (let elem of vet) {
    //     if (!unicos.includes(elem)) {
    //         unicos.push(elem);
    //     }
    // }
    // return unicos;

    vet.map(x => {
        if (!unicos.includes(x)) {
            unicos.push(x);
        }
    });
    return unicos;
    
}

function repeated(vet: number[]): number[] {
    let unicos: number[] = [];
    let repetidos: number[] = [];

    // for (let elem of vet) {
    //     if (!unicos.includes(elem)) {
    //         unicos.push(elem);
    //     } else {
    //         repetidos.push(elem);
    //     }
    // }
    // return repetidos;

    vet.map(x => {unicos.includes(x) ? repetidos.push(x) : unicos.push(x)});
    return repetidos;
}




// -------------------------- MAIN --------------------------

let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function main() {
    let vet = new Array<string>();

    while (true) {
        let line = input();
        write("$" + line);
        let args = line.split(" ");

        if      (args[0] === "end")             { break;                                                       }
        else if (args[0] === "get_men")         { write(fmt(get_men(       to_vet(args[1])))); }
        else if (args[0] === "get_calm_women")  { write(fmt(get_calm_women(to_vet(args[1])))); }
        else if (args[0] === "sort")            { write(fmt(sort(          to_vet(args[1])))); }
        else if (args[0] === "sort_stress")     { write(fmt(sort_stress(   to_vet(args[1])))); }
        else if (args[0] === "reverse")         { write(fmt(reverse(       to_vet(args[1])))); }
        else if (args[0] === "unique")          { write(fmt(unique(        to_vet(args[1])))); }
        else if (args[0] === "repeated")        { write(fmt(repeated(      to_vet(args[1])))); }
        else                                    { write("fail: comando invalido");                             }
    }
}

// Função auxiliar para converter de string para vetor
// "[1,2,3,4]" para [1, 2, 3, 4]
function to_vet(token: string): number[] {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x)
}

//Converte de vetor para string sem inserir os espaços
//[1, 2, 3, 4] => "[1,2,3,4]"
function fmt(vet: number[]): string {
    return "[" + vet.join(", ") + "]";
}

main()
