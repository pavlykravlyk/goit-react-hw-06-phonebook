import { combineReducers } from 'redux';
import types from './contacts-types';
import initialContacts from '../../contacts.json';

const items = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return state.some(({ name }) => payload.name === name)
        ? alert(`${payload.name} is already in contacts`)
        : [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FIND_CONTACTS_BY_NAME:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
