import React, { useContext } from 'react'
import toastContext from './toastContext'

export default function Child() {
    const a = useContext(toastContext)
    const handleButton = () => {
        a.addNewMessage('shiva','danger')
    }
    return (
        <div>
            Child
            <hr />
            <button className='btn btn-primary'
                onClick={handleButton}>click</button>
        </div>
    )
}
