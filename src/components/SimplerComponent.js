import React from 'react'

const SimplerComponent = props => {
    const something = "I am just happy"

    
    return (
        <div onClick={props.handleClick}>
            <p>{something}</p>
        </div>
    )
}

export default SimplerComponent
