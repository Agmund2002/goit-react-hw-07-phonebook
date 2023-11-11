import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};

  font-weight: 500;
  font-size: 18px;

  padding-bottom: ${p => p.theme.spacing(5)};
`;

export const Input = styled.input`
  font-size: 16px;
  border: 1px solid ${p => p.theme.colors.main};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};
  border-radius: 5px;
  min-width: 200px;
  max-width: 40%;
`;