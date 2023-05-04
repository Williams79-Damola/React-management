import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import '../styles/Home.css'
import { ItemContext } from '../Context/ItemContext'


// https://fakestoreapi.com/products


const Home = () => {

  const {dispatch} = useContext(ItemContext)
  const  [products,  setProducts] =  useState([]);

  useEffect(()=>{
    fetchData()
  },  [])

  const fetchData =async()=>{
     const res =  await axios.get("https://fakestoreapi.com/products")
    //  console.log(res.data);
     setProducts(res.data)
  }

  const output = products.map((item)=>{
    item.quantity =1
     return(
          <div className='product-body' key={item.id}>
           <div className='real-item'>
             <img src={item.image} alt={item.image} width="400kb"/>
             <p>{item.title}</p>
             <p>{item.price}</p>
             <button onClick={()=>dispatch({type: "ADD_ITEM", payload: item})}>Add To Cart</button>
          </div>
          </div>
     )
  })

  return (
    <div className='product-container'>
        {output}
    </div>
  )
}

export default Home