import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ContentPage from './components/ContentPage'
import Nav from './components/Nav'

function App() {
<<<<<<< HEAD
const [amount, setAmount] = useState(0)
const [category, setCategory] = useState("Ninjago")
    
  return (
    <div id="container">
        <Header amount={amount}/>
        <Nav category={category}/>
        <ContentPage amount={amount} setAmount={setAmount} category={category}/>
=======

  return (
    <div id="container">
        <Header/>
        <Nav />
        <ContentPage/>
>>>>>>> 7d67130d907711cfda06838cef59d09f15092864
    </div>
  )

}

export default App
