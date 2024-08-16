import React from 'react'

function Circle({width, height, children}) {
  return (
    <div className='border rounded-full flex justify-center items-center' style={{width:width, height:height}}>
        {children}
    </div>
  )
}

export default Circle