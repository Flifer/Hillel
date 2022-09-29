import React from "react";
import {useDispatch} from "react-redux";
import {remove} from "../store/actions/contacts";

export default function List({ contacts, onEdit }) {
  const dispatch = useDispatch();

  function onEditClick(e, contact) {
    e.stopPropagation();

    onEdit(contact);
  }

  function onDeleteClick(e, contact) {
    e.stopPropagation();

    dispatch(remove(contact.id));
  }

  return (
    <ul id="contactList">
      {contacts.map((contact, i) => (
        <li
          key={contact.id}
          className="contact-item"
        >
          <span>{contact.name}</span>
          <span>{contact.surname}</span>
          <span>{contact.number}</span>
          <button
            className="edit-button"
            onClick={e => onEditClick(e, contact)}
          >Edit</button>
          <button
            className="remove-button"
            onClick={e => onDeleteClick(e, contact)}
          >Delete</button>
        </li>
      ))}
    </ul>
  );
}