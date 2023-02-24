import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { LeftSidebar, RightSideView } from '../../component'

import './style.scss'

const Chat = () => {
  
  return (
    <div className='chat'>
    <LeftSidebar />
    <Routes>
      <Route path='/' element={<RightSideView/>} />
      <Route path='/chat/:id' element={<RightSideView />} />
    </Routes>
    </div>
  )
}

export default Chat
