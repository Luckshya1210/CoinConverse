import React, { useContext, useState } from 'react'
import Style from './NavBar.module.css'
import { Link } from 'react-router-dom'
import  ChatAppContext  from '../../Context/ChatAppContext'
import {Model,Error} from '../index'
import images from '../../assets' 
const NavBar = () => {  
  const menuItem=[
    {
      menu:"ALL USERS",
      link:"alluser"
    },
    {
      menu:"CHAT",
      link:"chat"
    },
    // {
    //   menu:"CONTACT",
    //   link:"/"
    // },
    // {
    //   menu:"SETTING",
    //   link:"/"
    // },
    // {
    //   menu:"FAQS",
    //   link:"/"
    // },
    // {
    //   menu:"TERMS OF USE",
    //   link:"/"
    // },
  ]
  const [active,setactive]=useState(2);
  const [open,setOpen]=useState(false);
  const [openModel,setopenModel]=useState(false);
  const {account,user,walletConxt,createAcc,error}=useContext(ChatAppContext)
  // console.log(account)/
  return (
    <div className={Style.NavBar}> 
        <div className={Style.NavBar_box}> 
          <div className={Style.NavBar_box_left}>
            <img src={images.cclogo} alt="logo" width={79} height={70}/>
          </div>
          <div className={Style.NavBar_box_right}>
            {/* DESKTOP */}
            <div className={Style.NavBar_box_right_menu}>
              {menuItem.map((el,i)=>(
                <div onClick={()=>setactive(i+1)} key={i+1} className={`${Style.NavBar_box_right_menu_items} ${active==i+1?Style.active_btn:""}`}>
                  <Link className={Style.NavBar_box_right_menu_items_link} to={el.link} style={{textDecoration: 'none',color:'white'}}>
                    {el.menu}
                  </Link>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            {open && (
              <div className={Style.mobile_menu}>
              {menuItem.map((el,i)=>(
                <div onClick={()=>setactive(i+1)} key={i+1} className={`${Style.mobile_menu_items} ${active==i+1?Style.active_btn:""}`}>
                  <Link className={Style.mobile_menu_items_link} to={el.link} style={{textDecoration: 'none',color:'white'}}>
                    {el.menu}
                  </Link>
                </div>
              ))}
              <p className={Style.mobile_menu_btn}>
                <img src={images.close} alt="close" width={50} height={50} onClick={()=>setOpen(false)}/>
              </p>


            </div>
            )}

            {/* connect wallet */}
            <div className={Style.NavBar_box_right_connect}> 
                {account==""?(
                  <button onClick={()=>walletConxt()}>
                    {""}
                    <span>Connect wallet</span>
                  </button>
                ):(
                  <button onClick={()=>setopenModel(true)}>
                    {""}
                    <img src={user?images.accountName:images.create2} alt="acc img" width={20} height={20}/>
                    {''}
                    <small>{user||"Create Account"}</small>
                  </button>
                )}
            </div>
            
            <div className={Style.NavBar_box_right_open} onClick={()=>setOpen(true)}>
                  <img src={images.open} alt="open" width={30} height={30}/>
            </div>
            

          </div>
        </div>
        {/* MODDEL */}
        {openModel && (
          <div className={Style.modelBox}>
            <Model openBox={setopenModel} title="WELCOME TO " head="Coin Converse" info="Decentralize Your Conversations, Empower Your Privacy!"
            smallInfo="Select your friend's name and address" image={images.cback} functionName={createAcc} address={account}/>
           </div>
        )}
        {error==""?"":<Error error={error}/>}
        
    </div>
  )
}

export default NavBar