import styled from 'styled-components'

export const SelectedCoffeCardContainer = styled.div`
  width: 31.125rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 36px 6px 36px;
  footer {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    div {
      width: 100%;
      padding-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      color: ${(props) => props.theme['gray-800']};
      font-size: 0.875rem;
    }
    .total {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['gray-800']};
    }
    button {
      width: 100%;
      padding: 1rem;
      background: ${(props) => props.theme['yellow-500']};
      border: none;
      border-radius: 6px;
      color: ${(props) => props.theme['gray-100']};
      font-weight: 700;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme['yellow-700']};
      }
    }
  }
`

export const SelectedCoffe = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-500']};
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  width: 100%;

  position: relative;
  .coffeNameAndValue {
    display: flex;
    p {
      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['gray-900']};
    }
    span {
      width: 4rem;
      position: absolute;
      left: calc(100% - 4rem);
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      color: ${(props) => props.theme['gray-800']};
      display: flex;
      justify-content: space-between;
    }
  }

  img {
    width: 18%;
  }
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
  .quantityOfAndRemoveContainer {
    display: flex;
    width: inherit;
    gap: 1rem;
    margin-top: 1.6rem;
    button {
      &:hover {
        background: ${(props) => props.theme['gray-500']};
      }
    }
  }
  .quantityOf {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-400']};
    padding: 0.2rem;
    gap: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    svg {
      cursor: pointer;
    }
  }
  button {
    font-size: 0.75rem;
    background-color: ${(props) => props.theme['gray-400']};
    border: none;
    padding: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    border-radius: 6px;
    color: ${(props) => props.theme['gray-700']};
    cursor: pointer;
  }
`
