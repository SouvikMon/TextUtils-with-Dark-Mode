import React from 'react'

export default function Alert(props) {
  return (
      <div style={{height: "50px"}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type.substring(0,1).toUpperCase()+props.alert.type.substring(1)}: </strong> {props.alert.text}   
    </div>}
    </div>
  )
}
