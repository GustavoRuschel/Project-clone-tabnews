class pessoa {
  constructor(nome, investidor) {
    this.nome = nome;
    this.investidor = investidor;
    this.idade = idade;
  }
}

const gabriel = new pessoa("Gabriel", "sardinha, 32");
const guilherme = new pessoa("Guilherme", "sardinha, 28");
const gustavo = new pessoa("Gustavo", "sardinha, 26");

function BaleiaOuSardinha(pessoa) {
  if (pessoa.investidor == baleia && pessoa.idade >= "25") {
    console.log(
      `${pessoa.nome} você é a Tesla? Binance? Kraken? MicroStrategy? BlackRock? Michael Saylor?`,
    );
  }

  if (pessoa.investidor == sardinha) {
    console.log(`${pessoa.nome} Você é um pequeno investidor!`);
  } else {
    console.log(`${pessoa.nome}, be careful lad you are going to be desimado`);
  }
}

BaleiaOuSardinha(gabriel);
BaleiaOuSardinha(guilherme);
BaleiaOuSardinha(gustavo);
