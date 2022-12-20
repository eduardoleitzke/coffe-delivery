import styled from 'styled-components'

export const CheckoutEmptyContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: -1;
  height: 100vh;
  width: 100%;
  p {
    font-family: 'Baloo 2';
    font-size: 3rem;
    color: ${(props) => props.theme['gray-700']};
  }

  button {
    background: ${(props) => props.theme['purple-500']};
    border: none;
    width: 10rem;
    border-radius: 8px;

    cursor: pointer;
    margin-top: 2rem;

    a {
      font-family: 'Roboto', sans-serif;
      border-radius: 8px;
      display: flex;
      padding: 1rem 0;
      justify-content: center;
      text-decoration: none;
      color: ${(props) => props.theme['gray-100']};
    }
  }
`

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  margin: 0 15rem;
  h4 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme['gray-800']};
  }
`
