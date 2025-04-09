import React from 'react'
import ReactDom from "react-dom"


export default function Portals({children,id}) {
    console.log(children)
    console.log(id)
  return (
    ReactDom.createPortal(children,document.getElementById(id))
  )
}
