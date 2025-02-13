import React, {useRef} from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

const DeleteModalComp = ({item, modalDel, handleCloseDel, deleteFunc}) => {


    return (
        <Modal show={modalDel} onHide={handleCloseDel} >
            <Modal.Header className='text-center'>
                <Modal.Body>Do you want to delete the card "{item.name}" ?</Modal.Body>
            </Modal.Header>
            <Modal.Body className='d-flex justify-content-center gap-1'>
                <Button className='btnBgGreen' onClick={handleCloseDel}>
                    CLOSE
                </Button>
                <Button className='btnTxtGreen' onClick={deleteFunc}>
                    DELETE
                </Button>

            </Modal.Body>
        </Modal>
    );
};

export default DeleteModalComp;