import {
    ACTION_CONTACT_DELETE,
    ACTION_CONTACT_FETCH_LIST,
    ACTION_CONTACT_UPDATE,
    ACTION_CONTACT_ADD,
  } from "../actions/contacts";
  
  const INITIAL_STATE = [];
  
  export default function contacts(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
      case ACTION_CONTACT_ADD:
        return [...state, payload];
      case ACTION_CONTACT_UPDATE:
        return state.map(contact => contact.id === payload.id ? payload : contact);
      case ACTION_CONTACT_DELETE:
        return state.filter(contact => contact.id !== payload);
      case ACTION_CONTACT_FETCH_LIST:
        return [...payload];
      default:
        return state;
    }
  }