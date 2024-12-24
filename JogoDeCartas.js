import { CardList } from "./Cartas.js";
import { Deck } from "./Cartas.js";
import { Card } from "./Cartas.js";
import { Player } from "./Jogador.js";

class CardGame {
    constructor() {
        this.PlayerList = [];
        this.Winners = [];
        this.Deck = new Deck();
        this.Turn = 0;
        this.RecentCard = 0;
    }

    startGame(PCount,SCards,P1Name) {
        this.Turn = 1000000*PCount;
        this.RecentCard = 0;
        this.Deck.resetDeck();
        this.PlayerList = [];
        this.Winners = [];

        this.PlayerList.push(new Player(P1Name,0));

        for (let i = 1; i < PCount; i++) {
            this.PlayerList.push(new Player("Bot"+i,i));
        }

        for (let i = 0; i < PCount; i++) {
            for (let j = 0; j < SCards; j++) {
                this.PlayerList[i].buyCards(this.Deck);
            }
        }

        while (this.PlayerList.length > 1){
            this.nextTurn();
        }
        
        console.log(this.Winners);
        console.log(this.PlayerList);
        //jogo termina
    }

    getPlayerTurn() {
        return this.Turn % this.PlayerList.length
    }

    validateCards(p) {
        let validC = [];
        
        if (this.RecentCard == 0){
            for (let i = 0; i < p.hand.countCards(); i++) {
                validC.push(i);
            }
            return validC;
        }

        for (let i = 0; i < p.hand.countCards(); i++) {
            let c = p.hand.cards[i];
            if (c.color == this.RecentCard.color || c.number == this.RecentCard.number){
                validC.push(i);
            }
        }
        return validC;
    }

    enemyAiSimple(p) {
        let vc = this.validateCards(p);
        
        if (vc.length == 0) {
            p.buyCards(this.Deck);
            return;
        }

        let i = Math.floor(Math.random() * vc.length);
        let j = vc[i];

        const c = p.playCard(j);
        this.RecentCard = c;
    }

    nextTurn() {
        let t = this.getPlayerTurn();
        let p = this.PlayerList[t];
        this.Turn++

        if (t != 0) {
            this.enemyAiSimple(p);
        }

        if (p.hand.cards.countCards == 0){
            const PVictory = this.PlayerList.splice(t,1);
            this.Winners.push(PVictory);
        }
        
        if (t == 0) {
            this.enemyAiSimple(p);
            //logica que permite que o jogador jogue vai aqui
        }
    }
}