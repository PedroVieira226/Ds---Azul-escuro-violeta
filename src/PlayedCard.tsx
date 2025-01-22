function PlayedCard(props:any){
return (
    <>
    <svg width="120" height="220" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="180" x="0" y="0" rx="20" ry="20" fill={props.color}/>
    </svg>
    </>
    )
}

export default PlayedCard