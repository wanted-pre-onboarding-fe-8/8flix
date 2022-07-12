import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
<<<<<<< HEAD

html,body{

  padding:0;
  margin:0;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text.medium};
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
        'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
        'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        sans-serif;
}

=======
 html, body {
     padding: 0;
     margin: 0;
     background-color: ${({ theme }) => theme.bg.primary};
 }
>>>>>>> 472d64e (feat: 다크모드, 라이트모드 theme 추가 및 적용)
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
`;

export default GlobalStyles;
