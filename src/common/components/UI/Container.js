import React from 'react'

function Container({ children, classes}) {
    return (
        <div className={classes}>{children}</div>
    )
}

export default Container