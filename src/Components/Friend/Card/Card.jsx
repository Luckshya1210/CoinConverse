import React from 'react'
import Style from './Card.module.css'
import images from '../../../assets'
import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Card = ({readMessage,readuser,el,i}) => {
    // const navigate=useNavigate();
  return (
    
    <Link to={`?name=${el.name}&address=${el.pubkey}`} className={Style.Link}>

        <div className={Style.Card} onClick={()=>(readMessage(el.pubkey),readuser(el.pubkey))}>
            <div className={Style.Card_box}>
                <div className={Style.Card_box_left}>
                    <img src={images.accountName} alt="username" width={50} height={50} className={Style.Card_box_left_img}/>
                </div>
                <div className={Style.Card_box_right}>
                    <div className={Style.Card_box_right_middle}>
                        <h4>{el.name}</h4>
                        <small>{el.pubkey.slice(21)}..</small>
                    </div>
                    <div className={Style.Card_box_right_end}>
                        <small>{i+1}</small>
                    </div>
                </div>
            </div>
        </div>
    </Link>
     
  )
}

export default Card