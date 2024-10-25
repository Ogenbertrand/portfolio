import { useState } from 'react'
import { Header } from './components/Header'
import './App.css'

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0)

  return (
    <>
     <Header></Header>
    </>
  )
}

export default App
