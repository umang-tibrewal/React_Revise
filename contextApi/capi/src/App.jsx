import { useState } from 'react'

import Login from './Component/Login'
import UserProvider from './Context/UserProvider'
import Profile from './Component/Profile'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>


<UserProvider>
<Login />
<Profile />

</UserProvider>

   
   
    </>
  )
}

export default App
