import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBus from './components/AddBus'
import ViewBus from './components/ViewBus'
import AddStudent from './components/AddStudent'
import AddDriver from './components/AddDriver'
import ViewDriver from './components/ViewDriver'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddBus/>
      <ViewBus/>
      <AddStudent/>
      <AddDriver/>
      <ViewDriver/>
    </>
  )
}

export default App
