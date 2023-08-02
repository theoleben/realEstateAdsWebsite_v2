import React, { useReducer } from "react";
import { useOutletContext } from "react-router-dom";
import classes from "./Contact.module.css";

const initialState = {
  name: "",
  surname: "",
  mail: "",
  phone: "",
  message: "",
};

const formReducer = (state, action) => {
  if (action.type === "NAME_CHANGE") {
    return { ...state, name: action.value };
  }

  if (action.type === "SURNAME_CHANGE") {
    return { ...state, surname: action.value };
  }

  if (action.type === "MAIL_CHANGE") {
    return { ...state, mail: action.value };
  }

  if (action.type === "PHONE_CHANGE") {
    return { ...state, phone: action.value };
  }

  if (action.type === "MESSAGE_CHANGE") {
    return { ...state, message: action.value };
  }

  return initialState;
};

const Contact = () => {
  const [visibilityHandler, setData] = useOutletContext();
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("submit");

    // console.log(formState);

    // Visibility
    visibilityHandler(true);

    // Data
    setData(formState);

    dispatchForm({ type: "RESET" });
  };

  const [formState, dispatchForm] = useReducer(formReducer, initialState);

  const nameChangeHandler = (event) => {
    // console.log(event.target.value);
    dispatchForm({ type: "NAME_CHANGE", value: event.target.value });
  };

  const surnameChangeHandler = (event) => {
    // console.log(event.target.value);
    dispatchForm({ type: "SURNAME_CHANGE", value: event.target.value });
  };

  const mailChangeHandler = (event) => {
    // console.log(event.target.value);
    dispatchForm({ type: "MAIL_CHANGE", value: event.target.value });
  };

  const phoneChangeHandler = (event) => {
    // console.log(event.target.value);
    dispatchForm({ type: "PHONE_CHANGE", value: event.target.value });
  };

  const messageChangeHandler = (event) => {
    // console.log(event.target.value);
    dispatchForm({ type: "MESSAGE_CHANGE", value: event.target.value });
  };

  return (
    <>
      <h2>Nous contacter</h2>
      <form onSubmit={submitHandler} className={classes.form}>
        <input
          type="text"
          placeholder="Nom *"
          onChange={nameChangeHandler}
          value={formState.name}
          required
        />
        <input
          type="text"
          placeholder="Prénom *"
          onChange={surnameChangeHandler}
          value={formState.surname}
          required
        />
        <input
          type="email"
          placeholder="Adresse mail *"
          onChange={mailChangeHandler}
          value={formState.mail}
          required
        />
        <input
          type="text"
          placeholder="Téléphone"
          value={formState.phone}
          onChange={phoneChangeHandler}
        />
        <textarea
          // rows="5"
          // cols="33"
          onChange={messageChangeHandler}
          value={formState.message}
          placeholder="Votre message"
        ></textarea>
        <button>Envoyer</button>
      </form>
    </>
  );
};

export default Contact;
