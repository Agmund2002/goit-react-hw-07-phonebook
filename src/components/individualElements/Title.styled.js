import styled from 'styled-components';

export const MainTitle = styled.h1`
  margin-bottom: ${p => p.theme.spacing(7)};
`;

export const SecondaryTitle = styled.h1`
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const Message = styled.p`
  font-size: 18px;
  color: ${p => p.theme.colors.negative};
`;
