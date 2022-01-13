import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContact } from '../../redux/contacts/contacts-selectors';
import contactsActions from '../../redux/contacts/contacts-actions';
import s from './ContactList.module.css';

const ContactList = () => {
  // const contacts = useSelector(state => state.contacts.items);
  // console.log(contacts);
  const contacts = useSelector(getVisibleContact);
  // console.log('contacts2', contacts2);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={s.ContactListItem} key={id}>
          <p className={s.ContactList}>
            {name}: {number}
          </p>
          <button
            className={s.ContactListButton}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
