function inside(vet: number[], value: number): boolean {
    for(let elem of vet) {
        if (elem == value) {
            return true;
        }                 
    } return false;
}

function index_of(vet: number[], value: number): number {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] == value) {
            return i;
        }
    } return -1;
}

function find_if(vet: number[]): number {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > 0) {
            return i;
        }
    } return -1;
}

function min_element(vet: number[]): number {
    if (vet.length == 0) {
        return -1;
    }

    let ref = 0;

    for (let i = 1; i < vet.length; i++) {
        if (vet[i] < vet[ref]) {
            ref = i;
        }
    } return ref;
}

function find_min_if(vet: number[]): number {
    let ref = find_if(vet);

    if (vet.length == 0 || ref == -1) {
        return -1;
    }

    for (let i = 1; i < vet.length; i++) {
        if (vet[i] < vet[ref] && vet[i] > 0) {
            ref = i;
        }
    } return ref;
}


// function inside(vet: number[], value: number): boolean {
//     // for (let elem of vet) {
//     //     if (elem === value) {
//     //         return true;
//     //     } 
//     // } return false;

//     return vet.includes(value);

// }

// function index_of(vet: number[], value: number): number {
//     // for (let i = 0; i < vet.length; i++) {
//     //     if (vet[i] === value) {
//     //         return i;
//     //     }
//     // } return -1;

//     return vet.indexOf(value); 
// }

// function find_if(vet: number[]): number {
//     // for (let i = 0; i < vet.length; i++) {
//     //     if (vet[i] > 0) {
//     //         return i;
//     //     }
//     // } return -1;

//     return vet.findIndex(x => x > 0);
// }

// function min_element(vet: number[]): number {
//     if (vet.length === 0) {
//         return -1;
//     }
//     let referencia: number = 0;
//     for (let i = 0; i < vet.length; i++) {
//         if (vet[i] < vet[referencia]) {
//             referencia = i;
//         }
//     } return referencia;

// }

// function find_min_if(vet: number[]): number {
//     if (vet.length === 0 || vet[0] < 0) {
//         return -1;
//     }
//     let referencia: number = 0;
//     for (let i = 0; i < vet.length; i++) {
//         if (vet[i] > 0 && vet[i] < vet[referencia]) {
//             referencia = i;
//         }
//     } return referencia;

// }



// -------------------------- MAIN --------------------------

let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function main() {
    while (true) {
        let line = input();
        write("$" + line);
        let args = line.split(" ");

        if (args[0] === "end")   { 
            break;
        }
        else if (args[0] === "in"){
            let result = inside(to_vet(args[1]), +args[2]);
            write(result ? "true" : "false");
        }
        else if (args[0] === "index_of"){
            let result = index_of(to_vet(args[1]), +args[2]);
            write(result);
        }
        else if (args[0] === "find_if"){
            let result = find_if(to_vet(args[1]));
            write(result);
        }
        else if (args[0] === "min_element"){
            let result = min_element(to_vet(args[1]));
            write(result);
        }
        else if (args[0] === "find_min_if"){
            let result = find_min_if(to_vet(args[1]));
            write(result);
        }
        else {
            write("fail: Comando inválido");
        }
    }
}

main();



// Função auxiliar para converter de string para vetor
// "[1,2,3,4]" para [1, 2, 3, 4]
function to_vet(token: string): number[] {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x)
}
