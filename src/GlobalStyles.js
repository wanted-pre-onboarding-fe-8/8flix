import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 html, body {
     padding: 0;
     margin: 0;
 }
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
`;

export default GlobalStyles;
