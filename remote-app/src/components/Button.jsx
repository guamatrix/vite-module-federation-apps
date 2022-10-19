import React from 'react'
export default function () {
    const [v, setV] = React.useState(0)
    return <button onClick={() => {
        setV((v) => v +1)
    }}>Count is {v}</button>
}