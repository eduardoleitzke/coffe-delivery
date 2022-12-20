import styled from 'styled-components'

export const CoffeCardContainer = styled.li`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 36px 6px 36px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  .tagContainer {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 0.2rem;
  }

  .tag {
    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    font-family: 'roboto', sans-serif;
    font-size: 0.625rem;
    font-weight: bold;
    line-height: 1.3;
  }

  .name {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
    line-height: 2.6;
  }

  .description {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['gray-600']};
    width: 90%;
    text-align: center;
    font-size: 0.875rem;
  }

  img {
    width: 120px;
    position: absolute;
    left: 28%;
    top: -10%;
  }
`

export const BuyCardDetails = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30%;
  margin-left: 20%;
  font-family: 'Roboto', sans-serif;
  gap: 2rem;
  p {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-700']};
    font-weight: bold;
    label {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: normal;
    }
  }

  span {
    display: flex;
    gap: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    height: 2rem;

    div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      background: ${(props) => props.theme['gray-400']};
      padding: 0 0.4rem;
      border-radius: 8px;
      width: 4.5rem;
      button {
        background: transparent;
        border: none;
        color: ${(props) => props.theme['purple-500']};
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
    .shoppingIcon {
      background: ${(props) => props.theme['purple-700']};
      border: none;
      padding: 0.4rem;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
