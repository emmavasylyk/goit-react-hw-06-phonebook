import { useLocaleStorage } from '../../hooks/useLocaleStorage';
import { useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import { ImUserPlus } from 'react-icons/im';

export default function ContactForm() {
  const [name, setName] = useLocaleStorage('name', '');
  const [number, setNumber] = useLocaleStorage('number', '');
  const dispatch = useDispatch();

  const hundleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const hundleSubmit = e => {
    e.preventDefault();
    const contact = { id: nanoid(), name, number };
    dispatch(contactsActions.addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={hundleSubmit}>
      <label className={s.LableName}>
        Name
        <input
          className={s.InputForm}
          placeholder="Ivan Petrov"
          type="text"
          name="name"
          value={name}
          onChange={hundleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.LableName}>
        Number
        <input
          className={s.InputForm}
          placeholder="111-11-11"
          type="tel"
          name="number"
          value={number}
          onChange={hundleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.ButtonContactForm} type="submit">
        <ImUserPlus className={s.ButtonContactFormIcon} />
        Add contact
      </button>
    </form>
  );
}
