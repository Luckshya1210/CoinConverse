import React, { useContext } from 'react'
import { UserCard } from '../Components/index'
import Style from './Alluser.module.css'
import ChatAppContext from '../Context/ChatAppContext'
const Alluser = () => {
  const {userList,addFrnd}=useContext(ChatAppContext)
  return (
    <div>
      <div className={Style.Alluser_info}>
        <h1> Find your friends</h1>
      </div>

      <div className={Style.Alluser}>
        {userList.map((el,i)=>(
          <UserCard key={i+1} el={el} i={i} addFriend={addFrnd}/>
        ))}
      </div>

    </div>

  )
}

export default Alluser