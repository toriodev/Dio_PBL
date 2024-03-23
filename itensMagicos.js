//Desafios JavaScript na DIO têm funções "gets" e "console.log" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "console.log": imprime um texto de saída (output), pulando linha.

// Definição da classe ItemMagico
class ItemMagico {
  //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
    constructor(tipoItem, danoItem, resistenciaItem) {
      this.tipo = tipoItem
      this.dano = danoItem
      this.resistencia = resistenciaItem
  
    }
  
    calcularDano() {
      return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
  }
  
  // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
  const tipoItem = ("arco");
  const danoItem = parseInt(("900"));
  const resistenciaItem = parseInt(("500"));
  
  //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
  let arco = new ItemMagico("faca", 500, 700);

  // TODO: Imprima os atributos do item personalizado
  console.log("Tipo: " + arco.tipo);
  console.log("Dano: " + arco.dano);
  console.log("Resistencia: " + arco.resistencia);
  
  // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
  const danoTotal = arco.calcularDano();
  console.log("Dano em combate: " + danoTotal);