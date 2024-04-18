import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  const red = () => {
    setColor("red")
  }

  const green = () => {
    setColor("green")
  }

  const yellow = () => {
    setColor("yellow")
  }

  const pink = () => {
    setColor("pink")
  }

  const blue = () => {
    setColor("blue")
  }

  const white = () => {
    setColor("white")
  }


  const olive = () => {
    setColor("olive")
  }

  const lavender = () => {
    setColor("lavender")
  }
  
  const grey = () => {
    setColor("grey")
  }

  const black = () => {
    setColor("black")
  }

  const purple = () => {
    setColor("purple")
  }

  return (
    <div class="main" style={{backgroundColor : color}}>

      <div class="colors">
        <span class="red" onClick={red}>Red</span>
        <span class="green" onClick={green}>Green</span>
        <span class="blue" onClick={blue}>Blue</span>
        <span class="olive" onClick={olive}>Olive</span>
        <span class="grey" onClick={grey}>Grey</span>
        <span class="yellow" onClick={yellow}>Yellow</span>
        <span class="pink" onClick={pink}>Pink</span>
        <span class="purple" onClick={purple}>Purple</span>
        <span class="lavender" onClick={lavender}>Lavender</span>
        <span class="white" onClick={white}>White</span>
        <span class="black" onClick={black}>Black</span>
      </div>

    </div>
  )
}

export default App
