import React from 'react';
import { connect } from 'react-redux';
import contactActions from 'redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ contactName, onFindContact }) => {
  return (
    <label className={styles.Label} htmlFor="">
      Find contacts by name
      <input
        className={styles.Input}
        type="text"
        value={contactName}
        onChange={onFindContact}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  contactName: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onFindContact: event =>
    dispatch(contactActions.findContactsByName(event.target.value)),
});

Filter.propTypes = {
  contactName: PropTypes.string.isRequired,
  onFindContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
