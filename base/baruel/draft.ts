let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtdAlbum: number = + input();
let qtdBaruel: number = + input();
let figurinhas: number[] = input().split(" ").map(Number);

function elementosRepetidos(vetor: number[]): number[] {
    return vetor.filter((num, idx) => vetor.indexOf(num) !== idx);
}

let figurinhasRepetidas: number[] = elementosRepetidos(figurinhas);

if (figurinhasRepetidas.length == 0) {
    write("N")
} else {
    write(figurinhasRepetidas.join(" "));
}

let album: number[] = [];
for (let i = 1; i <= qtdAlbum; i++) {
    album.push(i);
}

let figurasQueFaltam: number[] = album.filter(fig => !figurinhas.includes(fig));

if (figurasQueFaltam.length == 0) {
    write("N");
} else {
    write(figurasQueFaltam.join(" "));
}


