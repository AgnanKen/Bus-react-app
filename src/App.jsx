import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddDriver from './components/AddDriver'
import ViewDriver from './components/ViewDriver'
import AddBus from './components/AddBus'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addbus' element={<AddBus/>}/>
      <Route path='/adddriver' element={<AddDriver/>}/>
      <Route path='/viewdriver' element={<ViewDriver/>}/>
      {/* <Route path='/' element={<Viewb/>}/> */}

      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
