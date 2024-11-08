let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


const vet: number[] = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05];
const size = vet.length;

let value: number = +input();
let troco: number = Math.round(value * 100); // Convertendo para centavos

for (let i = 0; i < size; i++) {
  const currentValue = vet[i];
  const currentCentavos = Math.round(currentValue * 100); // Convertendo para centavos

  if (troco >= currentCentavos) {
    const qtd = Math.floor(troco / currentCentavos);
    if (qtd !== 0) {
      write(`${qtd} de ${currentValue.toFixed(2)}`);
      troco -= qtd * currentCentavos;
    }
  }
}

// Verificar se há valor quebrado menor que 0.05
if (troco > 0) {
  write(`Falta ${(troco / 100).toFixed(2)}`);
}