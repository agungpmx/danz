import React from "react";
import ReactLoading from 'react-loading';


export default function Loading() {
    return <div style={{ 
        width: '100%', 
        height: '50%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'fixed',
    }}>
    <ReactLoading type="bars" color={'rgb(25, 100, 186)'} height={70} width={100} />
</div>
}