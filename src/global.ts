import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    h2{
        font-family: 'Baloo 2, sans-serif';
        font-weight: 800;
    }
    p, span, li{
        font-family: 'Roboto', sans-serif;
        color: ${(props) => props.theme['gray-700']};
    }
    body{
        background: ${(props) => props.theme.background};
        margin: 2rem 0rem;
        display: flex;
        flex-direction: column;
        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        /* Firefox */
        input[type=number] {
        -moz-appearance: textfield;
}
    }
    header{
        margin: 0 15rem;
    }
    button{
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }
`
