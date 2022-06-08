console.log("trabalhando com listas");

const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDestinos.push(`Curitiba`);

console.log("Destinos possíveis: ");
console.log(listaDestinos);

listaDestinos.splice(0, 1);
console.log(listaDestinos);

console.log(listaDestinos[2]);
