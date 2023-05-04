import { createContext, useReducer } from "react";



const reducer=(state, action)=>{
     switch(action.type){
        case "ADD_ITEM":
            const initialProduct = state.filter((item)=>action.payload.id===item.id)

            if(initialProduct.length>0){
                return state
            }else{
                return  [...state, action.payload]
            }

        case "INCREMENT":
            const initialProduct1 = state.map((item)=>{
                if(item.id===action.payload.id){
                    return {...item, quantity: item.quantity +1}
                }else{
                    return item
                }
            })
            return initialProduct1
        case "DECREMENT":
            const initialProduct2 = state.map((item)=>{
                if(item.id===action.payload.id){
                    return {...item, quantity: item.quantity-1}
                }else{
                    return item
                }
            })

            return initialProduct2
        case "REMOVE":
            const initialProduct3 = state.filter((item)=> item.id !== action.payload.id)
            return initialProduct3


     }
}

export const ItemContext = createContext()

const ItemContextProvider =({children})=>{

    const [state, dispatch] = useReducer(reducer, [])
    return(
        <ItemContext.Provider value={{state, dispatch}}>
           {children}
        </ItemContext.Provider>
    )
}

export default  ItemContextProvider



