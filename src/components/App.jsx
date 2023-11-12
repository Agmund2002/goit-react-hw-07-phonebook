import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import {
  MainTitle,
  Message,
  SecondaryTitle,
} from './individualElements/Title.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { BarLoader } from 'react-spinners';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {!loading && error && (
        <p>Oops... Something went wrong! Try reloading the page</p>
      )}
      {loading && !error && <BarLoader />}
      {!loading && !error && (
        <>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm />
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter />
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <Message>Phonebook is empty</Message>
          )}
        </>
      )}
    </div>
  );
};
