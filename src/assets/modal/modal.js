import React from 'react';
import { Modal } from '@material-ui/core';

/*
Parameters:
imgsrc - image path
modalstyle - class name for different modal styles located in modal.scss
*/

export default function SimpleModal(props) {
    const body = (
      <div id="modal" className={props.modalstyle}>
        <img src={props.imgsrc} alt="Unavailable" />
      </div>
    );

    return (
        <div className="modal-container">
          <Modal
            className="modal-object"
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      );
}