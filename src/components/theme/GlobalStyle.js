import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    body {
        font-family: ${props => props.theme.fonts.base};
        background: ${props => props.theme.colors.background};
    }
`;

export default GlobalStyle;