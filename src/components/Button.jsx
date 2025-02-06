import React from 'react';

function Button(props) {
    return (
        <button type='button' onClick={() => console.log(props.buttonText)}>{props.buttonText}</button>
    )
}

export default Button;