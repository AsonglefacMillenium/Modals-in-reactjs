import React from 'react'
import { useState } from 'react'
import Modal from './Component/Modal'

const Home = () => {
//declaring the show and setshow
    const [show, setShow] = useState(false)
    return (
        <div className="home">

        
            <button onClick={() => setShow(true)}>Click here</button>

            <Modal onClose={() => setShow(false)} show={show}/>
        </div>
    )
}

export default Home 
