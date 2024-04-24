import React from 'react'
import './styles.css'

function Button({text, onClick, outlined}) {
    

    return (
        <>
            <button onClick={()=>onClick()} className={outlined ? "outlined-btn" : "btn" }>{text}</button>
        </>
    )
}

export default Button