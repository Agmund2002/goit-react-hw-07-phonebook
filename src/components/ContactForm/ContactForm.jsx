import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Label,
  ModernErrorMessage,
  ModernField,
  ModernForm,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact } from 'redux/operations';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(9, 'Short phone number')
    .max(12, 'Long phone number')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handlerAdd = inputValue => { 
    if (contacts.find(({ name }) => name === inputValue.name)) {
      return Notify.failure(`${inputValue.name} is already in contacts`);
    }

    dispatch(addContact({ ...inputValue, createdAt: new Date()}));
  };
  
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        handlerAdd(values);
        actions.resetForm();
      }}
    >
      <ModernForm>
        <Label>
          Name
          <ModernField name="name" placeholder="Jane Doe" />
          <ModernErrorMessage component="span" name="name" />
        </Label>

        <Label>
          Phone number
          <ModernField
            type="tel"
            name="phone"
            placeholder="000-000-0000"
          />
          <ModernErrorMessage component="span" name="phone" />
        </Label>

        <Button type="submit">Add contact</Button>
      </ModernForm>
    </Formik>
  );
};
