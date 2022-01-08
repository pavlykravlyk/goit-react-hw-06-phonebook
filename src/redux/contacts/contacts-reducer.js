import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import types from './contacts-types';
import initContacts from '../../contacts.json';

// const items = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return state.some(({ name }) => payload.name === name)
//         ? alert(`${payload.name} is already in contacts`)
//         : [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

const items = createReducer(initContacts, {
  [types.ADD]: (state, { payload }) =>
    state.some(contact => payload.name === contact.name)
      ? alert(`${payload.name} is already in contacts`)
      : [...state, payload],

  [types.DELETE]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

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
