import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
    }
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
    button,input{
        border:0;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
        ${({ theme }) => theme.flexCenter}
    };
   
    a{
    text-decoration: none;
    color: white;
    }

  
`;

export default GlobalStyle;
