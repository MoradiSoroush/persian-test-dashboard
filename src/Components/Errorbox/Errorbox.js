import React from 'react'
import "./Errorbox.css"

export default function ErrorBox({message}) {
  return (
    <div className='error-msg'>{message}</div>
  )
}

