import React from 'react'
import './RIghtClickedMenu.css'
const options = ['Archive chat','Mute notifications','Delete chat','Pin chat','Mark as unread']
export default function RIghtClickedMEnu(props) {



  return (
      <div className='rightClickMenu' style={{ top: props.Positions.length > 0 ? '' : `${props.Positions.Y}px`, left: props.Positions.length > 0 ? '' : `${props.Positions.X}px`, display: props.Positions.length > 0 && 'none'}}>
    {options.map((item,index)=>{
        return (
            <div key={index} className='Options'>
               {item}
            </div>
        )
    })}

</div>
  )
}
