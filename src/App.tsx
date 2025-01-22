import { useState } from "react"
import Hand from "./Hand";
import PlayedCard from "./PlayedCard";
import Deck from "./Deck";

const defaultHand = [{id: 0, color: 0},{id: 1, color: 1},{id: 2, color: 2},{id: 3, color: 3}]
let c = 4

function getRandomInt(max:any) {
  return Math.floor(Math.random() * max);
}

function App(){
  const [pCard,setPCard] = useState("blue")
  const [hand,setHand] = useState(defaultHand)

  function handleCardClick(d:any){
    setPCard(d.color)
    let a = hand
    a.splice(d.id,1)
    setHand(a)
    console.log(hand)
  }

  function drawCard(){
    let a = hand
    a.push({id: c, color: getRandomInt(4)})
    c = c+1
    setHand(a)
    console.log(hand)
  }

  return (<>
  <Hand sendData={handleCardClick} cards = {hand}/>
  <div className="position-absolute top-50 start-50 translate-middle">
    <PlayedCard color = {pCard}/>
  </div>
  <div className="position-absolute top-50 end-0 translate-middle">
    <Deck click = {drawCard}/>
  </div>
  </>)
}

export default App