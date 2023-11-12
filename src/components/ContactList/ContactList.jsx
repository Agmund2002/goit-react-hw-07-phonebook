import { Contact } from 'components/Contact/Contact';
import { Item, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/selectors';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts)

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
