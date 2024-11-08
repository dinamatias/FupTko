
function count(vet: number[], value: number): number {
    let contador: number = 0;

    for (let elem of vet) {
        if (elem == value) {
            contador++
        }
    } return contador;
}

function sum(vet: number[]): number {
    let soma: number = 0;

    for (let elem of vet) {
        soma += Math.abs(elem);
    }

    return soma;
}

function average(vet: number[]): number {
    return sum(vet)/vet.length;
}

function more_men(vet: number[]): string {
    let contadorHomens: number = 0;
    let contadorMulheres: number = 0;

    for (let elem of vet) {
        if (elem > 0) {
            contadorHomens ++;
        } else  {
            contadorMulheres++
        }
    }

    if (contadorHomens > contadorMulheres) {
        return "men";
    } if (contadorHomens < contadorMulheres) {
        return "women";
    } return "draw";

}

function half_compare(vet: number[]): string {
    let metade1: number[] = vet.slice(0, vet.length/2);
    let metade2: number[] = vet.slice(vet.length/2, vet.length);

    let somaMetade1 = sum(metade1);
    let somaMetade2 = sum(metade2);

    if (somaMetade1 > somaMetade2) {
        return "first";
    } if (somaMetade1 < somaMetade2) {
        return "second";
    } return "draw";
}

function sex_battle(vet: number[]): string {
    let homens: number[] = [];
    let mulheres: number[] = [];

    for (let elem of vet) {
        if (elem > 0) {
            homens.push(elem);
        } else {
            mulheres.push(elem);
        }
    }

    let mediaHomens: number = average(homens);
    let mediaMulheres: number = average(mulheres);

    if (mediaHomens > mediaMulheres) {
        return "men";
    } if (mediaHomens < mediaMulheres) {
        return "women";
    } return "draw";
}



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

        if      (args[0] === "end")          { break;                                                       }
        else if (args[0] === "count")        { write(count(to_vet(args[1]), +args[2]));                     }
        else if (args[0] === "sum")          { write(sum(to_vet(args[1])));                                 }
        else if (args[0] === "average")      { write(average(to_vet(args[1])).toFixed(2));                  }
        else if (args[0] === "more_men")     { write(more_men(to_vet(args[1])));                            }
        else if (args[0] === "half_compare") { write(half_compare(to_vet(args[1])));                    }
        else if (args[0] === "sex_battle")   { write(sex_battle(to_vet(args[1])));                          }
        else                                 { write("fail: comando invalido");                             }
    }
}

// Função auxiliar para converter de string para vetor
// "[1,2,3,4]" para [1, 2, 3, 4]
function to_vet(token: string): number[] {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x)
}


main()
