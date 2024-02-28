import styled from 'styled-components';
import theme from '@/theme';

export const MapWrapper = styled.div`
  width: 100%;
  height: 65vh;
  border-radius: 10px;
  border: 1px, ${theme.colors.stroke}, solid;
  background-color: ${theme.colors.white};
`;
