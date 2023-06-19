import React, { useContext } from 'react'
import Card from './Card/Card'
import Chat from './Chat/Chat'
import images from '../../assets'
import ChatAppContext from '../../Context/ChatAppContext'
import Style from './Friend.module.css'
const Friend = () => {
  const {account,sendmessage,friendMsg,friendList,readMessage,loading,user,currentUser,currentUserAddress,readuser}=useContext(ChatAppContext)
  console.log(friendList);
  return (
    <div className={Style.Friend}>
      <div className={Style.Friend_box}>
        <div className={Style.Friend_box_left}>
          {friendList.map((el,i)=>(
            <Card key={i+1} el={el} i={i} readMessage={readMessage} readuser={readuser}/>
          ))}
        </div>
        <div className={Style.Friend_box_right}>
          <Chat functionName={sendmessage} readuser={readuser} readMessage={readMessage} friendMsg={friendMsg} account={account} user={user} loading={loading} currentUser={currentUser} currentUserAddress={currentUserAddress}/>
        </div>
      </div>
    </div>
  )
}

export default Friend