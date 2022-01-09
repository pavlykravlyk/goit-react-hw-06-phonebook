import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactActions from 'redux/contacts/contacts-actions';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import styles from './ContactsList.module.css';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.List}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.Item}>
          <p className={styles.Name}>{name}:</p>
          <p className={styles.Number}>{number}</p>
          <button
            className={styles.Btn}
            onClick={() => dispatch(contactActions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};
