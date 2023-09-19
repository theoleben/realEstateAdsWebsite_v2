import React, { useReducer } from "react";
import { useOutletContext } from "react-router-dom";
import classes from "./Contact.module.css";

const initialState = {
  name: "",
  firstName: "",
  email: "",
  phone: "",
  message: "",
};

const formReducer = (state, action) => {
  if (action.type === "NAME_CHANGE") {
    return { ...state, name: action.value };
  }

  if (action.type === "FIRST_NAME_CHANGE") {
    return { ...state, firstName: action.value };
  }

  if (action.type === "EMAIL_CHANGE") {
    return { ...state, email: action.value };
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

  const firstNameChangeHandler = (event) => {
    // console.log(event.target.value);
    dispatchForm({ type: "FIRST_NAME_CHANGE", value: event.target.value });
  };

  const emailChangeHandler = (event) => {
    // console.log(event.target.value);
    dispatchForm({ type: "EMAIL_CHANGE", value: event.target.value });
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
          id="user_name"
          type="text"
          placeholder="Nom *"
          onChange={nameChangeHandler}
          value={formState.name}
          required
        />
        <input
          id="user_first_name"
          type="text"
          placeholder="Prénom *"
          onChange={firstNameChangeHandler}
          value={formState.firstName}
          required
        />
        <input
          id="user_email"
          type="email"
          placeholder="Adresse mail *"
          onChange={emailChangeHandler}
          value={formState.email}
          required
        />
        <input
          id="user_phone"
          type="text"
          placeholder="Téléphone"
          value={formState.phone}
          onChange={phoneChangeHandler}
        />
        <textarea
          id="user_message"
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
