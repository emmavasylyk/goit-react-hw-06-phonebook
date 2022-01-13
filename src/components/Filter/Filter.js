import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import s from './Filter.module.css';
import contactsActions from '../../redux/contacts/contacts-actions';

const Filter = () => {
  const value = useSelector(getFilter);
  console.log('value', value);
  const dispatch = useDispatch();

  return (
    <label className={s.LableFilter}>
      Find contacts by name
      <input
        className={s.InputFilter}
        placeholder="Ivan Petrov"
        type="text"
        value={value}
        onChange={e => {
          console.log('e.target.value', e.target.value);
          dispatch(contactsActions.changeFilter(e.target.value));
        }}
      />
    </label>
  );
};

export default Filter;
