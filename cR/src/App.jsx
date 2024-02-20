import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProvider from './Context/UserProvider'
import Login from './Components/Login'
import Display from './Components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProvider>
   <h4>Helllo umang i am the best </h4>

   <Login />
   <Display />

   </UserProvider>
    </>
  )
}

export default App
