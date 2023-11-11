import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const ModernForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};

  border: 2px solid black;
  border-radius: 5px;
  padding: ${p => p.theme.spacing(3)};
  margin-bottom: ${p => p.theme.spacing(7)};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};

  font-weight: 500;
  font-size: 18px;
`;

export const ModernField = styled(Field)`
  font-size: 16px;
  border: 1px solid ${p => p.theme.colors.main};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};
  border-radius: 5px;
  min-width: 200px;
  max-width: 45%;
`;

export const ModernErrorMessage = styled(ErrorMessage)`
  color: ${p => p.theme.colors.negative};
  font-size: 16px;
`;

export const Button = styled.button`
  border: 1px solid ${p => p.theme.colors.main};
  border-radius: 8px;
  padding: ${p => p.theme.spacing(1)};
  width: 110px;
  cursor: pointer;

  &:active {
    background-color: ${p => p.theme.colors.accent};
  }
`;
