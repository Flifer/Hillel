import React, {useEffect, useState} from "react";
import List from "./List";
import Form from "./Form";
import {useDispatch, useSelector} from "react-redux";
import {fetchList} from "../store/actions/contacts";


export default function Contacts({ defaultName, defaultSurname, defaultNumber }) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [editContact, setEditContact] = useState();

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch])

  return (
    <>
      <List
        contacts={contacts}
        onEdit={setEditContact}
      />

      <Form
        key={editContact?.id}
        editContact={editContact}
        defaultName={defaultName}
        defaultSurname={defaultSurname}
        defaultNumber={defaultNumber}
        clearEditContact={() => setEditContact(undefined)}
      />
    </>
  )
}