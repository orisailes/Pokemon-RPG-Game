import React from 'react';
import '../../css/button.css';

function Button({ text, onClick, className = "", id = "",turnIsActive }) {


  return (
    <button
      key={id}
      id={id}
      disabled={turnIsActive}
      className={`btn ${className}`}
      onClick={onClick}>

      <i className="fas fa-chevron-right "></i> 
      {text.toUpperCase().replace("_"," ")}

    </button>
  )
}

export default Button