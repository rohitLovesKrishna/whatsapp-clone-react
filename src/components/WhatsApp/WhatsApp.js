import styles from './WhatsApp.module.css'
import React,{useState} from 'react'
import { MdOutlineGroups } from 'react-icons/md'
import { BiShapeCircle} from 'react-icons/bi'
import { BsChatLeftText, BsThreeDotsVertical } from 'react-icons/bs'
import { profilePhoto, Search, Chats, ChatBigArea,Data } from '../'

const WhatsApp = (props)=>{
const [clicked,setClicked] = useState(false)
    const [user, setUser] = useState(0)

const [searching,setSearching] = React.useState(false);
    const [text, setText] = React.useState('');

    const searchedFriend = (searchedText)=>{
        setText(searchedText);
        setTimeout(() => {
            setSearching(true);
        }, 1)
    }
    const yesClicked = (id)=>{
setClicked(true);
        setUser(id)
    }
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
                        <Search searchedFriend={searchedFriend}/>
                    </div>
                    <Chats isSearching={searching} searchedFriend={text} positions={props.positions} onClick = {yesClicked}/>
                </div>
                <ChatBigArea  clicked = {clicked} data={Data} user= {user}/>
        </div>
        </>
    )
}
export default WhatsApp