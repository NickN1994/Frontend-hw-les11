import React from "react";

function Button (props) {
    return (

    <button
        disabled={props.disabled}
        onClick={props.onClick}
        type='button'>
        {props.buttontext}
    </button>

    )
}

export default Button;