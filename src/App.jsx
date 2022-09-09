import { useState } from 'react'
import Home from './views/Home'
import Products from './views/Products'
import SingleProduct from './views/SingleProduct'
import Login from './views/Login'
import Register from './views/Register'
import Cart from './views/Cart'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((state) => state.user.user)

  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:category' element={<Products/>}></Route>
        <Route path='/product/:id' element={<SingleProduct/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={user? <Navigate to='/'/> : <Login/>}></Route>
        <Route path='/signup' element={user? <Navigate to='/'/> : <Register/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
