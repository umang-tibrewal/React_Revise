import React,{useContext} from 'react'
import UserContext from '../Context/Usercontext'

function Profile() {

    const {user}=useContext(UserContext)
  return (
    <>
    {user}
    </>
  )
}

export default Profile;
