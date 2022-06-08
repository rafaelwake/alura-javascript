console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

console.log("Verificando destino desejado \n\n");
let contador = 0;

for ( let cont = 0; cont < 3; cont++) {
  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existente");
    break;
    } else console.log("Não existe");
}

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa Viagem!!");
  listaDeDestinos.splice(2, 1); //removendo item
} else {
  console.log("Não é maior de Idade e não posso vender");
}

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa viagem");
} else {
  console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);
