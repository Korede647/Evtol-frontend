import React from 'react'

const Modal = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm bg-opacity-10 z-50'>
      <div className='w-100 h-110 rounded-[8px] bg-blue-400 '></div>
    </div>
  )
}

export default Modal
