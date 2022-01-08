import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import ContactList from './ContactList';

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => {
    dispatch(contactActions.deleteContact(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
