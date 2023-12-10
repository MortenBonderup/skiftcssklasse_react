import { useState } from 'react'
import './App.css'

function App() {
  const [cssklasse, setklasse] = useState("blaa")

  return (
    <div>
      <button type="button" onClick={() => setklasse("blaa")}>Blaa</button>&nbsp;<button type="button" onClick={() => setklasse("roed")}>Rød</button>
      <p className={cssklasse}>Hej med dig, du!</p>
    </div>
  )
}

export default App
