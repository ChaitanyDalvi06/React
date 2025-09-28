import './ProductList.css'
import Product from './Product'
import { useEffect, useState } from 'react'

export default function ProductList() {



  let [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { method: "GET" })
      .then((response) => { return response.json() })
      .then((data) => { setProducts(data) })
      .catch((error) => { console.log(error) })



  })






  // let products=[
  //   {
  //     id:1,
  //     name:"Samsung S23",
  //     price:150000,
  //     imageUrl:"https://images.samsung.com/is/image/samsung/p6pim/in/feature/164487493/in-feature-galaxy-s-535964244?$FB_TYPE_A_MO_JPG$",
  //   },

  //   {
  //     id:2,
  //     name:"VIVO v23",
  //     price:25000,
  //     imageUrl:"https://i.gadgets360cdn.com/products/large/vivo-v23-pro-5g-649x800-1641366966.jpg",
  //   },

  //   {
  //     id:3,
  //     name:"One plus",
  //     price:550000,
  //     imageUrl:"https://www.jiomart.com/images/product/original/493665925/oneplus-nord-ce-3-lite-5g-256-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493665925-p600340967-0-202304101447.jpeg?im=Resize=(420,420)",
  //   },
  //   {
  //     id:4,
  //     name:"Iphone 14",
  //     price:900000,
  //     imageUrl:"https://media.binglee.com.au/d/0/2/c/d02c8dedffc3a6d56af07fb517b0ff6edaf44552_Apple_MQ503ZP_A_iPhone_Hero_2.jpg",
  //   },
  // ]





  return (
    <section className='product-list'>

      {
        products.map((prod) => {
          return (
            <Product
              name={prod.title}
              imageUrl={prod.image}
              price={prod.price} />

          )
        })
      }


    </section>
  )
}
