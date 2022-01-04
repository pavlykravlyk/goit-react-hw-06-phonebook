import { nanoid } from 'nanoid';
import contactsTypes from './contacts-types';

const addContact = (name, number) => ({
  type: contactsTypes.ADD,
  payload: { id: nanoid(5), name, number },
});

const deleteContact = contactId => ({
  type: contactsTypes.DELETE,
  payload: contactId,
});

const findContactsByName = value => ({
  type: contactsTypes.FIND_CONTACTS_BY_NAME,
  payload: value,
});

const contactActions = { addContact, deleteContact, findContactsByName };

export default contactActions;
