import React,{useEffect,useState} from 'react'
import Style from './Chat.module.css'
import { useLocation } from 'react-router-dom'
import images from '../../../assets'
import {coverTime} from '../../../Utlis/apiFeature'
import {Loader} from '../../index'
function useQuery(){
    return new URLSearchParams(useLocation().search)
}
const Chat = ({functionName,readuser,readMessage,friendMsg, account,user,loading, currentUser,currentUserAddress}) => {
    const location=useLocation();
    const query=useQuery();
    const [message,setmessage]=useState('');
    const [chatData,setchatData]=useState({
        name:"",
        address:""
    })
    useEffect(()=>{
      if(query.get('address')){
        readMessage(query.get('address'));
        readuser(query.get('address'));
      }
    },[])
    // useEffect(()=>{
    //     setchatData((chatData)=>({
    //         ...chatData,name:query.get('name'),address:query.get('address')
    //     }))
    //     // setchatData({name:query.get('name'),address:query.get('address')});
    // },[location])
    // console.log(query.get('name'));
    // console.log(query.get('address'));
    
  return (
    <div className={Style.Chat}>
      {currentUser && currentUserAddress?(
        <div className={Style.Chat_user_info}>
          <img src={images.accountName} alt="image" width={70} height={70}/>
          <div className={Style.Chat_user_info_box}>
            <h4>{currentUser}</h4>
            <p className={Style.show}>
              {currentUserAddress}
            </p>
          </div>
        </div>
      ):("")}
      <div className={Style.Chat_box_box} >
        <div className={Style.Chat_box}>
          <div className={Style.Chat_box_left}>
            {friendMsg.map((el,i)=>(
              <div>
                {el.sender===query.get('address')?(
                  <div className={Style.Chat_box_left_title}>
                    <img src={images.accountName} alt='image' width={50} height={50}/>
                    <span>
                      {query.get('name')}{""}
                      <small>Time:{coverTime(el.timestmp)}</small>
                    </span>
                  </div>
                ):(
                  <div className={Style.Chat_box_left_title}>
                    <img src={images.accountName} alt='image' width={50} height={50}/>
                    <span>
                      {user}{"  "}
                      <small>Time:{coverTime(el.timestmp)}</small>
                    </span>
                  </div>
                )}
                <p key={i+1}>
                  {el.messg}
                  {""}
                  {""}
                </p>
              </div>
            ))}
          </div>
          <div className={Style.Chat_box_right}>

          </div>
        </div>
        {currentUser&&currentUserAddress ? (

          <div className={Style.Chat_box_send}>
            <div className={Style.Chat_box_send_img}>
             <img src={images.smile} alt="smile" width={50} height={50}/>
             <input type='text' placeholder='Type your message here' onChange={(e)=>setmessage(e.target.value)} />
             <img src={images.file} alt="file" width={50 } height={50}/>
             {loading===true?(
              <Loader/>
             ):(
              <img src={images.send} alt="file" width={50} height={50} style={{cursor:'pointer'}} onClick={()=>functionName({msg:message,address:query.get('address')})}/>
             )}
             </div>
          </div>
        ):(
          ""
        )}
      </div>
    </div>
  )
}

export default Chat