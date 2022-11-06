import React from "react";
import "./index.scss"

export default function Checkbox(props) {
    const {value, label, onClick} = props
    return (
        <div className="checkbox">
            <input onClick={onClick} className="checbox_input" type="checkbox" checked={value}/>
            <label>{label}</label>            
        </div>
    )
}