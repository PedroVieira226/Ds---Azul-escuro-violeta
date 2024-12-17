class Card {
    constructor(color,number) {
      this.color = color;
      this.number = number;
    }
  }


  class CardList {
    constructor() {
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    removeCard(index) {
        if (index >= 0 && index < this.cards.length) {
            const cartaRemovida = this.cards.splice(index, 1);
            return cartaRemovida;
        } else {
            return null;
        }
    }

    showCards() {
        if (this.cards.length === 0) {
            console.log("A lista de cartas está vazia.");
        } else {
            console.log("Cartas na lista:");
            this.cards.forEach((carta, index) => {
                console.log(index + ": ");
                console.log(carta) //Só é possivel imprimir um objeto quando ele é o unico elemento
            });
        }
    }

    countCards() {
        return this.cards.length;
    }
}


class Deck extends CardList {
  constructor() {
    super();
  }

  drawCard() {
    if (this.countCards() == 0){
      this.resetDeck()
    }

    let i = this.countCards();
    let j = Math.floor(Math.random() * i);
    const cartaRemovida = this.cards.splice(j, 1);
    return cartaRemovida;
  }

  resetDeck() {
    this.cards = [];
    const colors = ["Vermelho", "Azul", "Verde", "Amarelo"];
    for (let color of colors) {
      for (let number = 0; number <= 9; number++) {
        this.addCard(new Card(color, number));
      }
    }
  }
}

export {CardList,Deck,Card};