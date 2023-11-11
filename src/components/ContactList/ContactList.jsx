import { Contact } from 'components/Contact/Contact';
import { Item, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = contacts.filter(({ name }) => {
    if (filter === '') {
      return true;
    }

    return name.toLowerCase().includes(filter.toLowerCase());
  });


  return (
    <List>
      {filterContacts.map(item => (
        <Item key={item.id}>
          <Contact data={item} />
        </Item>
      ))}
    </List>
  );
};
