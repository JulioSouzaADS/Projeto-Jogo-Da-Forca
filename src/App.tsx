import { useState } from 'react'

import './App.css'
import HengmanDrawning from './components/hengmanDrawning'
import HengmanWord from './components/hengmanDrawning'
import Keyboard from './components/keyboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div> Julio Souza</div>
        {/* <HengmanDrawning /> */}
        <HengmanWord/>
        <Keyboard />

      </div>
    </> 
  )
}

export default App
