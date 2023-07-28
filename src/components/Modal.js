import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import { BsFillSendCheckFill } from "react-icons/bs";
import ReactDOM from "react-dom";

const ModalContent = (props) => {
  //   console.log(props);
  return (
    <div className={classes.modal}>
      <div>
        <BsFillSendCheckFill className={classes.icon} />
      </div>
      <span>Votre message a bien été envoyé.</span>
      <span className={classes.resume}>Voici un résumé des informations:</span>
      <div className={classes.content}>
        <span>
          <b>Nom</b>: {props.data.name}
        </span>
        <span>
          <b>Prénom</b>: {props.data.surname}
        </span>
        <span>
          <b>Adresse email</b>: {props.data.mail}
        </span>
        <span>
          <b>Téléphone</b>: {props.data.phone}
        </span>
        <p>
          <b>Message</b> : {props.data.message}
        </p>
      </div>
      <div>
        <button onClick={props.close}>Fermer</button>
      </div>
    </div>
  );
};

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.close}></div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  //   console.log(props);

  const closeHandler = () => {
    props.isShown(false);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop close={closeHandler} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalContent data={props.data} close={closeHandler} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
