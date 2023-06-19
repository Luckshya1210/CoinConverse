import React,{useState,useContext } from 'react'
import Style from './Model.module.css'
import images from '../../assets'
import ChatAppContext from '../../Context/ChatAppContext'
import {Loader } from '../../Components/index'
const Model = ({openBox,title,head,info,smallInfo,image,functionName,address}) => {
  const [name,setname]=useState("");
  const [accAdd,setaccAdd]=useState("");
  const {loading}=useContext(ChatAppContext);

  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_left}>
          <img src={image} alt="buddy" width={700} height={700}/>
        </div>
        <div className={Style.Model_box_right}>
          <h1>{title} <span>{head}</span></h1>
          <p id='infoc'>{info}</p>
          <small>{smallInfo}</small>
          {loading==true? <Loader/>:
          (
            <div className={Style.Model_box_right_name}>
            <div className={Style.Model_box_right_name_info}>
              <img src={images.username} alt="user" width={30} height={30}/>
              <input type='text' placeholder='Name' onChange={(e)=>setname(e.target.value)}/>
            </div>
            <div className={Style.Model_box_right_name_info}>
              <img src={images.account} alt="user" width={30} height={30}/>
              <input type='text' placeholder={address || 'Enter address'} onChange={(e)=>setaccAdd(e.target.value)}/>
            </div>
            <div className={Style.Model_box_right_name_btn} > 
              <button onClick={()=>functionName({name,accAdd})}>
                {""}
                <img src={images.send} alt="send" width={30} height={30}/>
                {""}
                Submit
                </button>
              <button onClick={()=>openBox(false)}>
                {""}
                <img src={images.close} alt="send" width={30} height={30}/>
                {""}
                Cancel
                </button>
            </div>
          </div>
          )}
         
        </div>

      </div>
    </div>
  )
}

export default Model