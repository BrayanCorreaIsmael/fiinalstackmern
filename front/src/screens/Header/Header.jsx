import React from 'react'
import './Header.css'
import { Route, Routes } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='navbar'>
      <img src="https://seekvectorlogo.net/wp-content/uploads/2023/03/stockx-vector-logo-2023.png" className='logo'/>
      <a href="">Destacados</a>
      <a href="">Hombre</a>
      <a href="">Mujer</a>
      <a href="">Niño/a</a>
      <a href="">Accesorios</a>
      <a href="">Sale</a>
      <img src="/carrito-de-compras.svg" alt="" className='trolley'/>
    </div>
      <hr />



        {/* <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/Destacados' element={<Header/>}/>
            <Route path='/Hombre' element={<Donate/>}/>
            <Route path='/Mujer' element={<Products/>}/>
            <Route path='/Niño-a/' element={<ProductDetail/>}/>
            <Route path='/Accesorios' element={<Header/>}/>
            <Route path='/Sale' element={<Header/>}/>
        </Routes> */}
        


        
    </>
  )
}

export default Header