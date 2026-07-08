import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import Theme from './index'

const GlobalStyle = createGlobalStyle<{ theme: typeof Theme}>`
    ${reset};

    body {
        font-family: ${props => props.theme.fonts.base};
        background: ${props => props.theme.colors.background};
    }
`;

export default GlobalStyle;