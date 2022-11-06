import React from "react";
import IconNoutFound from "../../assets/not_found"

export default function DataNotFound(params) {
    return (
        <div style={{ 
            height: 500, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <IconNoutFound/>
            <span style={{
                fontWeight: 'bold',
                fontSize: 25,
                color: '#699ec9'
            }}>Data tidak ditemukan</span>
        </div>
    )
}