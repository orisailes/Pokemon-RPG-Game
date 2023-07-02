import React from 'react';
import '../../css/button.css';

function Button({ text, onClick, className = "", id = "",turnIsActive, showArrow=true }) {


  return (
    <button
      key={id}
      id={id}
      disabled={turnIsActive}
      className={`btn ${className}`}
      onClick={onClick}>

        {showArrow && <i className="fas fa-chevron-right "></i>}
      {text.toUpperCase().replace("_"," ")}

    </button>
  )
}

export default Button