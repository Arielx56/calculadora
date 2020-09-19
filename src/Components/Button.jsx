import React from 'react';
import './Button.css';


const OperadorMath = (val) => {
    return !isNaN(val) || val === ".";
}
const Button = (props) => (
  
    <div className={`button-calculadora ${
        OperadorMath(props.children) ? null : "operator"
        }`}
        onClick={()=>props.handleClic(props.children)}
    >
        {props.children}

    </div>
)

export default Button;