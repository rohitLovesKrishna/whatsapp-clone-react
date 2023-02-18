import React from 'react'
import styles from './Chats.module.css'
import {Data} from '../'
export default function Chats() {
  return (
      <div className={styles.userSection}>
        {Data.map((item)=>{
            return(
                <>
                    <div  key={item.id} className={styles.chatPerHead}>
                        <div className={styles.image}>
                            <img src={require('../assests/profilePhoto.jpg')} alt="profile" />
                        </div>
                        <div className={styles.personDetails}>
                            <div className={styles.titleMessage}>
                                <h4 style={{ letterSpacing: '1px' }}>{item.title}</h4>
                                <h6 style={{ letterSpacing: '1px' }}>{item.message}</h6>
                            </div>
                            <div className={styles.timeNotification}>
                                <span>{item.time}</span>
                                <span>{item.notification}</span>
                            </div>
                        </div>
                    </div>
                </>
            )
        })}
      </div>
  )
}
