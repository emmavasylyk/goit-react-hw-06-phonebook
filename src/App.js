import React from 'react';
import 'modern-normalize/modern-normalize.css';
import './App.css';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { ToastContainer } from 'react-toastify';

const Title = ['Title'];

export default function App() {
  return (
    <Container>
      <h1 className={Title}>Phonebook</h1>
      <ContactForm />
      <h2 className={Title}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer theme={'colored'} />
    </Container>
  );
}
