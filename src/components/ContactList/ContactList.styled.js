import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};

  font-size: 18px;
`;

export const Item = styled.li`
  display: flex;
  gap: ${p => p.theme.spacing(5)};
  align-items: center;
`;