import React from 'react'
import styles from './Search.module.css'
import { BiFilter } from 'react-icons/bi'
export default function Search() {
  return (
<>
          <div className={styles.searchSection}>
              <span className='search'><input type="text" placeholder='Search or start new chat' /></span>
              <span title="Unread chats filter" className='filter'><BiFilter style={{ cursor: 'pointer', color: 'white' }} /></span>
          </div>
</>
  )
}
