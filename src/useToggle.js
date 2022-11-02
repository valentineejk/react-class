import { useState } from 'react'

const useToggle = (initial = false) => {
    const [state, setstate] = useState(initial);

    const toggle = () => {
        setstate((prev) => !prev);
    }

    return [state, toggle]
}

export default useToggle