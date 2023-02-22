import React from 'react'
import { LeftSidebar, RightSideView } from '../../component'

import './style.scss'

const Chat = () => {
  return (
    <div className='chat'>
      <LeftSidebar/>
      <RightSideView/>
    </div>
  )
}

export default Chat
