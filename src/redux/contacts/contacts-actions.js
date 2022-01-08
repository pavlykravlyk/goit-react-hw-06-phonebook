// import { nanoid } from 'nanoid';
import { createAction, nanoid } from '@reduxjs/toolkit';
// import contactsTypes from './contacts-types';

// const addContact = (name, number) => ({
//   type: contactsTypes.ADD,
//   payload: { id: nanoid(5), name, number },
// });

// const deleteContact = contactId => ({
//   type: contactsTypes.DELETE,
//   payload: contactId,
// });

// const findContactsByName = value => ({
//   type: contactsTypes.FIND_CONTACTS_BY_NAME,
//   payload: value,
// });

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const findContactsByName = createAction('contacts/findByName');

const contactActions = { addContact, deleteContact, findContactsByName };

export default contactActions;
