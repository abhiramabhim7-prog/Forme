import { useState } from 'react'
import Employ from './Employ'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Employ/>
    
    </div>
  )
}

export default App
