import React from 'react'
import styles from './Search.module.css'
import { BiFilter } from 'react-icons/bi'
export default function Search(props) {
  const [friendName,setFriendName] = React.useState('');
const findingName = (e)=>{
  setFriendName(e.target.value)
  setTimeout(()=>{
    props.searchedFriend(e.target.value);
  },1000)
}
  return (
<>
          <div className={styles.searchSection}>
              <span className='search'><input type="text" placeholder='Search or start new chat'  value={friendName} onChange={(e)=>findingName(e)}/></span>
              <span title="Unread chats filter" className='filter'><BiFilter style={{ cursor: 'pointer', color: 'white' }} /></span>
          </div>
</>
  )
}
