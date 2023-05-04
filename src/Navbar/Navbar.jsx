import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../Navbar/Navbar.css'
import { ItemContext } from '../Context/ItemContext';



const Navbar = () => {

  const {state} = useContext(ItemContext)
  return (
    <div className='nav-menu'>
        <Link to='/'>Home</Link>
      <div className='cart-no'>
          <span>{state.length}</span>
          <Link to='/cart'><AiOutlineShoppingCart/></Link>

       </div>
    </div>
  )
}

export default Navbar