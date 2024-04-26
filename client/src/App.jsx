import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './Products'
import CreateProduct from './CreateProduct'
import UpdateProduct from './UpdateProduct'

function App() {

  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Products />}></Route>
      <Route path='/create' element={<CreateProduct />}></Route>
      <Route path='/update/:id' element={<UpdateProduct />}></Route>
    </Routes>
    </BrowserRouter>
  </div>
    )
}

export default App
