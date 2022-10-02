import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {saveContact} from "../store/actions/contacts";

export default function Form({
 editContact,
 defaultName,
 defaultSurname,
 defaultNumber,
 clearEditContact,
}) {
  const dispatch = useDispatch();
  const [name, setName] = useState(editContact?.name ?? defaultName);
  const [surname, setSurname] = useState(editContact?.surname ?? defaultSurname);
  const [number, setNumber] = useState(editContact?.number ?? defaultNumber);

  function onFormSubmit(e) {
    e.preventDefault();

    const newContact = {
      ...editContact,
      name: name,
      surname: surname,
      number: number
    };

    dispatch(saveContact(newContact));

    setName('');
    setSurname('');
    setNumber('');
    clearEditContact()
  }

  function onNameChange(e) {
    setName(e.target.value);
  }
  
  function onSurnameChange(e) {
    setSurname(e.target.value);
  }

  function onNumberChange(e) {
    setNumber(e.target.value);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        value={name}
        onChange={onNameChange}
        type="text"
        placeholder="Name"
      />
      <input
        value={surname}
        onChange={onSurnameChange}
        type="text"
        placeholder="Surname"
      />
      <input
        value={number}
        onChange={onNumberChange}
        type="tel"
        placeholder="Phone number"
      />
      <button>Отправить</button>
    </form>
  );
}