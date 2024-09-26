import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './first'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height: "100vh",width:"100wh"}}>
      <First/>
    </div>
  )
}

export default App
