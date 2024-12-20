import { CardList } from "./Cartas.js";

class Player{

    constructor(name, id){
        this.id = id;
        this.name = name;
        this.hand = new CardList();
    }

    getPlayerId(){
        return this.id;
    }

    buyCards(Deck){
        const card = Deck.drawCard();
        this.hand.addCard(card);
        return card;
    }

    playCard(index){
         if (index < 0 || index >= this.hand.countCards()) {
            console.log(`${this.name} tentou jogar uma carta inválida!`);
            return null; 
    }
        const card = this.hand.removeCard(index); 
        console.log("Carta jogada:" + card)
        return card; 
    }

    showHand() {
        this.hand.showCards();
    }
}

export{Player}