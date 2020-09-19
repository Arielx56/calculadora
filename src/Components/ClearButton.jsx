import React from 'react';
import './ClearButton.css'

const ClearButton = (props) => (
    <div className='clean' onClick={props.handleClear}>
        {props.children}
    </div>
)

export default ClearButton;