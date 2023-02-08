import styles from './WhatsApp.module.css'
import { MdOutlineGroups } from 'react-icons/md'
import { BiShapeCircle, BiFilter } from 'react-icons/bi'
import { BsChatLeftText, BsThreeDotsVertical } from 'react-icons/bs'

import { chatImage, profilePhoto } from '../'
const WhatsApp = ()=>{

    return (
        <>
        <div className={styles.main__box}>
                <div className={styles.smallArea}>
                    <div className={styles.profileBox}>
                        <div className={styles.profileSection}>
                            <div className={styles.profilePhoto}>
                                <img src={profilePhoto} alt="profile" />
                            </div>
                            <div className={styles.toolsBox}>
                                <span title='Communities'><MdOutlineGroups style={{cursor:'pointer',color:'white'}}/></span>
                                <span title='Status'><BiShapeCircle style={{ cursor: 'pointer', color: 'white' }} /></span>
                                <span title='New Chat'><BsChatLeftText style={{ cursor: 'pointer', color: 'white' }} /></span>
                                <span title='Menu'><BsThreeDotsVertical style={{ cursor: 'pointer', color: 'white' }} /></span>
                            </div>
                        </div>
                        <div className={styles.searchSection}>
                            <span className='search'><input type="text" placeholder='Search or start new chat' /></span>
                            <span title="Unread chats filter" className='filter'><BiFilter style={{ cursor: 'pointer', color: 'white' }} /></span>
                        </div>
                    </div>
    <div className={styles.userSection}></div>
                </div>
<div className={styles.bigArea}></div>
        </div>
        </>
    )
}
export default WhatsApp