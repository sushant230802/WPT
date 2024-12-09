import React,{useContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {User}=useContext(UserContext)

    if(!User)return <div className='profile'>please Login</div>
  
    return (
    <div className='profile'>
      Welcome {User.username}
    </div>
  )
}

export default Profile;
