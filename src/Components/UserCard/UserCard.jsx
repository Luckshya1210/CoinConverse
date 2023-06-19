import React from 'react'
import Style from './UserCard.module.css'
import images from '../../assets'

const UserCard = ({el,i,addFriend}) => {
  return (
    <div className={Style.UserCard}> 
      <div className={Style.UserCard_box}>
        <img className={Style.UserCard_box_img} src={images[`image${i+1}`]} alt="user" width={100} height={100}/>
        <div className={Style.UserCard_box_info}>
          <h3>{el.name}</h3>
          <p>{el.accaddress.slice(0,25)}..</p>
          <button onClick={()=>addFriend({name:el.name,accAdd:el.accaddress})}>Add Friend</button>
        </div>
      </div>
      <small className={Style.number}>{i+1}</small>
    </div>
  )
}

export default UserCard