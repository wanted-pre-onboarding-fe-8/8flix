import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html,body{

  padding:0;
  margin:0;
  background-color: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.medium};
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
        'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
        'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        sans-serif;
}

 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
`;

export default GlobalStyles;
