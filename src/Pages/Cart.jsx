import React, { useContext} from 'react'
import { ItemContext } from '../Context/ItemContext'
import '../styles/Cart.css'

const Cart = () => {
  const {state} = useContext(ItemContext)
  const {dispatch} = useContext(ItemContext)



  const grand_total = state.reduce((total, item)=>{
    return (total + item.price * item.quantity)
  }, 0)


   const output = state.map((item)=>{
     return(
      <div>
         <div className='cart-body'>
            <img src={item.image} alt={item.image} width= "100kb"/>
            <p className='decs'>{item.title}</p>
            <p className='qty'>{item.quantity}</p>
            <p className='price'>{item.quantity * item.price}</p>
            <div>
              <button onClick={()=>dispatch({type: "INCREMENT", payload: item})}>+</button>
              <p className='figure'>{item.quantity}</p>
              <button onClick={()=>{if(item.quantity>1){
                dispatch({type: "DECREMENT",  payload:  item})
              }else{
                 dispatch({type: "REMOVE", payload: item})
              }}}>-</button>

            </div>
            <p onClick={()=>dispatch({type: "REMOVE", payload: item})}>X</p>
         </div>

         </div>
     )
   })

  return (
    <div>
    <div className='cart-container'>
        {state.length>0 ?  
          output  :
          <h1>Cart is empty</h1>
        }
    </div>

    {state.length>0 && <h1>{grand_total}</h1>}

    </div>
  )
}

export default Cart