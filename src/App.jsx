import react, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Variant from './components/Variant/variant';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css'
import First from './components/First/First';
import Catalog from './components/Catalog'

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [count, setCount] = useState(0)
  return (
  <Router>
    <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='/variant' element={<Variant selectedItem={selectedItem}/>}/>
      <Route path='/catalog' element={<Catalog setSelectedItem={setSelectedItem}/>}/>
    </Routes>
  </Router>
  )
}

export default App