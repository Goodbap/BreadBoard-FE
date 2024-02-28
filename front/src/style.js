import {createGlobalStyle} from 'styled-components';
import Jua from '@/static/Jua-Regular.ttf';

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Jua';
    src: url(${Jua}) format('truetype');
    font-weight: normal;
  } 

  html {
    display: flex;
    justify-content: center;
    /* font-size: 16px; */
    overflow-x: hidden;
  }

  body, html {
    margin: 0;
    font-family: 'Jua';
    font-size: 16px;
  }

  body  {
    width: 393px;
    height: 852px;
  }
  #root {
    background-color: #faeab1;
    height: 100%;
    width: 100%;
  }
`;
