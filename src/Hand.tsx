import Card from "./Card";

function Hand(props:any){

  function handleData(d:any) {
    props.sendData(d)
  }

return(<>
<div className="position-absolute bottom-0 start-50 translate-middle-x">
  <div className="container text-center">
    <div className="row">
      {props.cards.map((i: any) =>  <div className="col"><Card color = {i.color} id = {i.id} sendData={handleData}/></div>)}
    </div>
  </div>
</div>
</>)
}

export default Hand