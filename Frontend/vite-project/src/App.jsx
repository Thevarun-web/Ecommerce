import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'> 
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/collection' element={<Collection/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/place-order' element={<PlaceOrder/>}></Route>
          <Route path='/order' element={<Order/>}></Route>
          
        </Routes>
    </div>
  )
}

export default App
