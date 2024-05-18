const Product=(props)=>{


    return (
        <>
        <div className="container"> 
        <div className="left-sec">
            <img src={props.img}/>
            </div>
        <div className="right-sec">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <p> {props.price}</p>
            
        </div>
        </div>
         </>
    )
}

export default Product