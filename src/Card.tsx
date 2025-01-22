import { useState } from "react"

function Card(props:any){
    const [pos,setPos] = useState(30)

    function hover(){
        console.log("Hovered")
        setPos(10)
    }

    function hoverEnd(){
        console.log("Unhovered")
        setPos(30)
    }

    function click(){
        let dataPacket = {id: props.id, color: parseColor(props.color)}
        props.sendData(dataPacket)
    }

    function parseColor(i:any){
        if (i == 0){
            return "blue"
        } else if (i == 1) {
            return "red"
        } else if (i == 2) {
            return "yellow"
        } else if (i == 3) {
            return "green"
        }
    }

    return (
    <>
    <svg width="120" height="220" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="180" x="0" y={pos} rx="20" ry="20" fill={parseColor(props.color)} onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}/>
    </svg>
    </>
    )
}

export default Card