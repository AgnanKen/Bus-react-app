import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './components/AddStudent'
import AddDriver from './components/AddDriver'
import ViewDriver from './components/ViewDriver'
import ViewStudent from './components/ViewStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddStudent/>
      <ViewStudent/>
      <AddDriver/>
      <ViewDriver/>
    </>
  )
}

export default App
