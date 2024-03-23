//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// TODO: Defina uma função chamada "combinandoNomesPokemons" que recebe um parâmetro chamado (palavra);
// TODO: Dentro da função, crie uma variável chamada "palavraPokemon" que é formada pela concatenação da "palavra" com a string "saur";  
// TODO: Após a variável, retorne a palavra pokemon; 

function combinandoNomesPokemons(nomeEntrada){
  var palavraGerada = nomeEntrada + "saur"
  return palavraGerada
}


// Entrada da palavra usando o gets():
let nomeEntrada = ("victor");
var palavraGerada = combinandoNomesPokemons(nomeEntrada);


// Exibindo a palavra gerada:
console.log(palavraGerada);