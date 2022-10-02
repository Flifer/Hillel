import ContactApi from "../../Contacts/contactApi";

export const ACTION_CONTACT_DELETE = 'remove';
export const ACTION_CONTACT_UPDATE = 'update';
export const ACTION_CONTACT_FETCH_LIST = 'fetchList';

export const ACTION_CONTACT_ADD= 'add';


export function saveContact(contact) {
  return dispatch => {
    if (contact.id) {
        ContactApi.edit(contact.id, contact)
        .then((newContact) => {
          dispatch({ type: ACTION_CONTACT_UPDATE, payload: newContact });
        });
    } else {
        ContactApi.create(contact)
        .then((newContact) => {
          dispatch({ type: ACTION_CONTACT_ADD, payload: newContact });
        });
    }
  }
}

export function remove(id) {
  return dispatch => {
    ContactApi.delete(id)
      .then(() => {
        dispatch({ type: ACTION_CONTACT_DELETE, payload: id });
      });
  };
}

export function fetchList() {
  return dispatch => {
    ContactApi.getContactList()
      .then((list) => {
        dispatch({ type: ACTION_CONTACT_FETCH_LIST, payload: list });
      });
  };
}