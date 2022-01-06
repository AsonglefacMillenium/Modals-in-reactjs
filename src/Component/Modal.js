import React from 'react'
import "./Modal.css"

const Modal = (props) => {
// showing modal and handling outside and inside click with stopPropagation
    if (!props.show) {
        return null;
        
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                <div className="closebtn" onClick={props.onClose}>
                    <span>&times;</span>
                </div>
                    <div className="modal-title">
                        <h2>2022 BEST WISHES</h2>
                    </div>
                </div>


                <div className="modal-body">
                    <h1>HAPPY NEW YEAR 2022</h1>
                </div>

                <div className="modal-footer">
                    <p>We learn react better </p>
                </div>
            </div>
        </div>
    )
}

export default Modal
