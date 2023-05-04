
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import ItemContextProvider from './Context/ItemContext'


function App() {
  return (
    <ItemContextProvider>
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </ItemContextProvider>
  )
}

export default App
