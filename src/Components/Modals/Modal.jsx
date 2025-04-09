import React from "react";
import ReactDOM from "react-dom";
import "./ModalsStyles.css";


export default function DeleteModal({isShow,message,submitAction,cancelAction}) {

  console.log(message)
  return (
    ReactDOM.createPortal(  <div  className="modal-container">
      <div className={isShow ? "modal-box active" : "modal-box"}>
        <h1> {message ? message : "ایا مطمینید؟"} </h1>
        <div className="modal-buttons__container">
          <button className="modal-button submit-btn"  onClick={submitAction}>بله</button>
          <button className="modal-button cancel-btn" onClick={cancelAction}>خیر</button>
        </div>
      </div>
    </div>,document.getElementById("modal"))
 
    )

}
