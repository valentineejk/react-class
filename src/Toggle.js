import React, { useState } from 'react'
import useToggle from './useToggle'

const Toggle = () => {
    const [isVisible, toggle] = useToggle();
    return (
        <div className='App'>
            <button onClick={ toggle }>
                { isVisible ? "Hide" : "Show" }
            </button>

            { isVisible && <h1> Hidden text</h1> }

        </div>
    )
}

export default Toggle
