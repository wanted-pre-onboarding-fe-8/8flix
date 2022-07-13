import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
    'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif;
  background-color: #141414;
  color: #fff;
}

* {
  box-sizing: border-box;
  outline: none;
  border: none;
}

`;

export default GlobalStyles;
