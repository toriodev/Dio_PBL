/*Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome  
- idade  
- tipo (ex: guerreiro, mago, monge, ninja )*/

class heroi{
  constructor(nome, idade, tipo, ataque){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque
  }

}

//Entrada de dados
let heroiNovo = new heroi("Victor", 31, "Mago", "magia")
let heroiNovo0 = new heroi("Victor", 31, "Guerreiro", "espada")
let heroiNovo1 = new heroi("Victor", 31, "Monge", " artes marciais")
let heroiNovo2 = new heroi("Victor", 31, "Ninja", "shuriken")

//Imprime Mensagem
console.log(`${heroiNovo.nome} o ${heroiNovo.tipo} de ${heroiNovo.idade} anos atacou usando ${heroiNovo.ataque}`)

console.log(`${heroiNovo0.nome} o ${heroiNovo0.tipo} de ${heroiNovo0.idade} anos atacou usando ${heroiNovo0.ataque}`)

console.log(`${heroiNovo1.nome} o ${heroiNovo1.tipo} de ${heroiNovo1.idade} anos atacou usando ${heroiNovo1.ataque}`)

console.log(`${heroiNovo2.nome} o ${heroiNovo2.tipo} de ${heroiNovo2.idade} anos atacou usando ${heroiNovo2.ataque}`)