import React,{useState,useEffect, useContext} from 'react'
import Style from './Filter.module.css'
import ChatAppContext from '../../Context/ChatAppContext'
import images from '../../assets'
import {Model} from '../index'
const Filter = () => {
  const {account,addFrnd}=useContext(ChatAppContext);
  const [addFriend,setaddFriend]=useState(false);
  return (
    <div className={Style.Filter}>
      <div className={Style.Filter_box}>
        <div className={Style.Filter_box_left}>
          <div className={Style.Filter_box_left_search}>
            <img src={images.search} alt="img" width={20} height={20}/>
            <input type='text' placeholder='Search'/>
          </div>
        </div>
        <div className={Style.Filter_box_right}>
          {/* <button>
            <img src={images.clear} alt="clear" width={20} height={20}/>
            Clear Chat
          </button> */}
          <button onClick={()=>setaddFriend(true)}> 
            <img src={images.user} alt="clear" width={20} height={20}/>
            Add Friend
          </button>
        </div>
      </div>
      {/* model */}
      {addFriend && (
        <div className={Style.Filter_model}>
            <Model openBox={setaddFriend}  title="WELCOME TO " head="Coin Converse" info="Decentralize Your Conversations, Empower Your Privacy!"
            smallInfo="Select your friend's name and address" image={images.hero} functionName={addFriend} address={account}/> 
        </div>
      )}
    </div>
  )
}

export default Filter