import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 2.5rem;
  }
`
export const LocationAndCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  div {
    background-color: ${(props) => props.theme['purple-300']};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    padding: 0.5rem;
    color: ${(props) => props.theme['purple-500']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    border-radius: 8px;
  }
  p {
    color: ${(props) => props.theme['purple-700']};
  }

  a {
    background: ${(props) => props.theme['yellow-300']};
    padding: 0.5rem;
    border-radius: 8px;
    position: relative;
    cursor: pointer;

    div {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background: ${(props) => props.theme['yellow-700']};
      text-align: center;
      position: absolute;
      bottom: calc(100% - 0.6rem);
      left: calc(100% - 0.6rem);
      color: #fff;
    }

    svg {
      color: ${(props) => props.theme['yellow-700']};
      display: flex;
      position: relative;
    }
  }
`
