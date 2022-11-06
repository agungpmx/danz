import React from "react";
import "./index.scss"

export default function Button(props) {
    const { width, height, background, label, color, onClick} = props

    
    return (
        <button 
            onClick={onClick}
            style={{
            width: width,
            height: height,
            backgroundColor: background,
            color: color
            }}>
            {label}
        </button>
    )
}