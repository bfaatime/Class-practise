import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Add from './pages/Add'
import Favorites from './pages/Favorites'
import Basket from './pages/Basket'
import NotFound from './components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
       <Route index element={<Home/>}/>
       <Route path="/shop" element={<Shop/>}/>
       <Route path="/add" element={<Add/>}/>
       <Route path="/favorites" element={<Favorites/>}/>
       <Route path="/basket" element={<Basket/>}/>
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
