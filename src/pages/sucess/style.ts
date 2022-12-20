import styled from 'styled-components'

export const SucessContainer = styled.section`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15rem;

  .border {
    background: linear-gradient(
      60deg,
      ${(props) => props.theme['yellow-500']},
      ${(props) => props.theme['purple-500']}
    );
    position: relative;

    border-radius: 6px 36px 6px 36px;
    z-index: -1;
    margin-top: 2.5rem;
    padding: 0.1rem;
  }
  div:first-child {
    span {
      color: ${(props) => props.theme['yellow-700']};
      font-size: 2rem;
      font-family: 'baloo 2', sans-serif;
      font-weight: 800;
    }

    p {
      font-size: 1.25rem;
      /* line-height: 26%; */
    }

    ul {
      padding: 2.5rem;
      position: relative;
      background: ${(props) => props.theme.background};
      z-index: 1;
      border-radius: 6px 36px 6px 36px;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      li {
        display: flex;
        gap: 0.875rem;
        align-items: center;
        p {
          font-size: 1rem;
        }
        svg {
          border-radius: 50%;
          display: block;
          padding: 0.5rem;
        }
        .firstIcon {
          background: ${(props) => props.theme['purple-500']};
        }
        .secondIcon {
          background: ${(props) => props.theme['yellow-500']};
        }
        .thirdIcon {
          background: ${(props) => props.theme['yellow-700']};
        }
      }
    }
  }
`
