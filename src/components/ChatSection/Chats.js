import React from 'react'
import styles from './Chats.module.css'
import {Data} from '../'
export default function Chats(props) {
    
    const { isSearching, searchedFriend } = props;
    const Data2 = Data.filter((item) => {
     searchedFriend.trim().toLowerCase()
        return item.title.toLowerCase() === searchedFriend.trim().toLowerCase() ;
    })
    const rightClicked = (e)=>{
        e.preventDefault();
        props.positions(e.clientX, e.clientY)
    }

  return (
      <div className={styles.userSection}>
          {!isSearching || searchedFriend.trim().length < 1 ?  Data.map((item)=>{
            return(
                <div onContextMenu={(e)=>rightClicked(e)} key={item.id} className={styles.chatPerHead} onClick={()=>props.onClick(item.id)}>
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
          )
          }) : Data2.map((item) => {
              return (
                  <div key={item.id} className={styles.chatPerHead} onClick={() => props.onClick(item.id)}>
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
              )
          })
          
        }
       
      </div>
  )
}
