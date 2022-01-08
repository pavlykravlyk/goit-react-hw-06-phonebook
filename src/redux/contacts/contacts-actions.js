import { createAction, nanoid } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/deleteContact');
const findContactsByName = createAction('contacts/findContactByName');

const contactActions = { addContact, deleteContact, findContactsByName };

export default contactActions;
