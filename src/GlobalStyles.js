import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
<<<<<<< HEAD
 html, body {
     padding: 0;
     margin: 0;
     background-color: black;
 }
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
=======
body {
  padding: 0;
  margin: 0;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
    'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif;
}

* {
  box-sizing: border-box;
  outline: none;
  border: none;
}

>>>>>>> 3503e3d (chore: pretendard 폰트 설치)
`;

export default GlobalStyles;
