import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import {
  MainTitle,
  Message,
  SecondaryTitle,
} from './individualElements/Title.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Message>Phonebook is empty</Message>
      )}
    </div>
  );
};
