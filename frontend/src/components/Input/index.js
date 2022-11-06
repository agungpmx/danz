import React from "react";
import "./index.scss"
import { Gap } from ".."

export default function Input({label, placeholder, onChange, value}) {
    return (
        <div style={{ width: '100%', padding: 10}}>
            <label className="label_input">
                {label}
            </label>
            <Gap height={4}/>
            <input value={value} onChange={(val) => onChange(val.target.value)} className="input" placeholder={placeholder}/>
        </div>
    )
}