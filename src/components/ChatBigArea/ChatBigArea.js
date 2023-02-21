import React from 'react'
import './ChatBigArea.css'
import { profilePhoto } from '../'
import { BsThreeDotsVertical, BsSearch, BsEmojiSmile, BsMic } from 'react-icons/bs'
import { ImAttachment } from 'react-icons/im'


export default function ChatBigArea(props) {
  return (
    <>
      {!props.clicked ? <div className='bigArea'></div> : <div className='selectedChat'>
        <div className='selectedFriendData'>
          <div className='profilePhoto'>
            <img src={profilePhoto} alt="profile" />
          </div>
          <span><h4>{props.data[props.user].title}</h4></span>
          <div className='searchAndMenu'>
            <span title='search'><BsSearch style={{ cursor: 'pointer', color: 'white' }} /></span>
            <span title='Menu'><BsThreeDotsVertical style={{ cursor: 'pointer', color: 'white' }} /></span>
          </div>
        </div>
        <div className='chatArea'>
          <div className='messageByUser'>
            <span>{props.data[props.user].message}</span>
            <span>{props.data[props.user].time}</span>
          </div>
          <div className='messageByMe'><span>{props.data[props.user].message}</span>
            <span>{props.data[props.user].time}</span>
          </div>
        </div>
        <div className='typingArea'>
          <span title='emoji'><BsEmojiSmile style={{ cursor: 'pointer', color: 'white', fontSize: '30px', marginLeft: '10px' }} /></span>
          <span title='attach'><ImAttachment style={{ cursor: 'pointer', color: 'white', fontSize: '30px',marginLeft:'10px' }} /></span>
          <input type="text" placeholder='Type Your Message..' autoFocus/>
          <span title='mic'><BsMic style={{ cursor: 'pointer', color: 'white', fontSize: '30px' }} /></span>
        </div>
        </div>}
     
    </>
  )
}
