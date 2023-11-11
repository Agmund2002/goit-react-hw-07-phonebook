import { useDispatch, useSelector } from "react-redux";
import { Input, Label } from "./Filter.styled";
import { change, getFilter } from "redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getFilter);

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={evt => dispatch(change(evt.target.value))}
      />
    </Label>
  );
};
