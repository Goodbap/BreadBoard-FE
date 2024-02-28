import styled from 'styled-components';
import theme from '@/theme';

export const TitleWrapper = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4vh;
  box-sizing: border-box;
`;

export const Title = styled.p`
  font-size: 2rem;
  color: ${theme.colors.text};
  margin: 0;
`;
