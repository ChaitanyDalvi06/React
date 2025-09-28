import './Product.css'

export default function Product(props)
{

    console.log(props)
    return(
        <div className="product">
            <div className='pro-img'>
               <img className='image' src={props.imageUrl}></img>
            </div>

            <div className='details'>
                <h1>{props.name}</h1>
                <h2>&#8377; {props.price}</h2>
            </div>
        {/* <h1>{props.name}</h1> */}



        </div>
    )
}

//export default Product