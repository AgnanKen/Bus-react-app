import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBus from './components/AddBus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddBus/>
    </>
  )
}

export default App
