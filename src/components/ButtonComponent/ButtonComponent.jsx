import React from 'react'
import { Link } from 'react-router-dom'

const ButtonComponent = (className, label, to) => {
    
    return (
        <Link to={to} className={className}>{label}</Link>
    )
}

export default ButtonComponent