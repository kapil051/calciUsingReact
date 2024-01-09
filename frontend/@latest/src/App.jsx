import { useState } from 'react'
import { Calci } from './components/Calci'  


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Calci></Calci>
    </>
  )
}

export default App
