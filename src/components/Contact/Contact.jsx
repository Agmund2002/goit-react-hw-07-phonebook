import { useDispatch } from "react-redux";
import { Button, Icon } from "./Contact.styled";
import { deleteContact } from "redux/operations";

export const Contact = ({ data: { id, name, phone } }) => {
  const dispatch = useDispatch()
  
  return (
    <>
      <span>{name}:</span>
      <span>{phone}</span>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        <Icon />
      </Button>
    </>
  );
};
