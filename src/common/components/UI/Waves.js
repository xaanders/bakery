import React from 'react'
import Wave from 'react-wavify';

function Waves({ classesList, options, color }) {
    return (
        <Wave className={classesList} fill={color}
            paused={false}
            options={options} />
    )
}

export default Waves