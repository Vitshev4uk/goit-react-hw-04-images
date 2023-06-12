import React from "react";
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

function Modal(props) {
  const { close, children } = props;

  React.useEffect(() => {
     const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };


  });

  return createPortal(
    <div className={css.Overlay} onClick={close}>
        <div className={css.Modal}>
          {children}
        </div>
      </div>, modalRoot)

}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired
}

export default Modal;