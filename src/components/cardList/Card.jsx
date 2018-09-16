import React from 'react'

const Card = ({img, colorIdentity}) => {
    
    return(
        <div>
            <img src={img} />
            <div>{colorIdentity}</div>
        </div>
    )
}

export default Card