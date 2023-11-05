import React, {FC, HTMLAttributes, PropsWithChildren, useState} from 'react';
import {Modal} from "react-bootstrap";

const ImageModal: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({children, ...props}) => {
    const [modalShow, setModalShow] = useState(false)
    return (
        <>
            <div onClick={() => setModalShow(true)} {...props} style={{cursor: 'zoom-in'}}>
                {children}
            </div>
            <Modal
                className='text-center'
                show={modalShow}
                onHide={() => setModalShow(false)}
                centered
            >
                <Modal.Header closeButton/>
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ImageModal;