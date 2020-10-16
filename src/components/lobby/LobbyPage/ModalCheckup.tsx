import React  from "react";
import { Modal } from "react-bootstrap";
interface ModalProps {
  show: boolean,
  action: string,
  handleAction: () => void,
  handleCancel : ()=> void
}

const ModalCheckup = (props : ModalProps) => {
    const {show , action , handleAction , handleCancel} = props
    return (
        <Modal show={show} size="lg" centered  dialogClassName="">
            <Modal.Body>
            <p>Do you want to {action.toLocaleLowerCase()} this lobby ?</p>
            <button onClick={handleAction}>{action}</button>
            <button onClick={handleCancel}>Cancel</button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalCheckup;
