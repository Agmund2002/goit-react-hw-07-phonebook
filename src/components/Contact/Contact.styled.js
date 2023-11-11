import styled from 'styled-components';
import { ImBin } from 'react-icons/im';

export const Button = styled.button`
  width: 35px;
  height: 35px;
  border: 1px solid ${p => p.theme.colors.main};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const Icon = styled(ImBin)`
  fill: ${p => p.theme.colors.negative};
`;
