import { useDispatch } from "react-redux";
import { Button, Icon } from "./Contact.styled";
import { remove } from "redux/contactsSlice";

export const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch()
  return (
    <>
      <span>{name}:</span>
      <span>{number}</span>
      <Button type="button" onClick={() => dispatch(remove(id))}>
        <Icon />
      </Button>
    </>
  );
};
