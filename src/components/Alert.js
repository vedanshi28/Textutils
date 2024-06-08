import React from 'react'

export default function Alert(props) {
   
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-warning-${props.alert.type} alert-dismissible fade show`} role="alert" style={{color:props.mode==='light'?'green':'green'}}>
       <strong>{props.alert.type}</strong>: {props.alert.msg}
       <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
  )
}
