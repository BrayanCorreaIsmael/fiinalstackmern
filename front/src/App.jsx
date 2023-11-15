import React, {useState} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './screens/Products/ProductDetail'
import Donate from './screens/Donate/Donate'
import Footer from './screens/Footer/Footer'
import Products from './screens/Products/Products'
import Header from './screens/Header/Header'
import Home from './screens/Home/Home'




function App() {

  return (
    <>
      <Routes> 
      <Route path='/' element={<Home/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/product/:pid' element={<ProductDetail/>}/>
      </Routes>
  
    </>
  )
}

export default App
