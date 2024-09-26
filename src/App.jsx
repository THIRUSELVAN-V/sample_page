import React from 'react'
import "./App.css";
import Variant from './components/Variant/variant';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
  <Router>
    <Routes>
      <Route path='/variant' element={<Variant/>}/>
    </Routes>
  </Router>
  )
}

export default App