import React from 'react'
import "./Errorbox.css"

export default function ErrorBox({msg}) {
  return (
    <div className='error-msg'>{msg}</div>
  )
}

