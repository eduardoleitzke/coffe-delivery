import styled from 'styled-components'

export const PaymentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 40rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  padding: 2.5rem;
  gap: 2rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
      display: flex;
      justify-content: flex-start;
      gap: 1rem;
      align-items: center;
      width: 32%;
      padding: 1rem;
      font-size: 0.7rem;
      color: ${(props) => props.theme['gray-700']};
      background: ${(props) => props.theme['gray-400']};
      line-height: 13px;
      border: 1px solid transparent;
      border-radius: 6px;
      cursor: pointer;
      &:hover {
        background: ${(props) => props.theme['gray-500']};
      }

      &.active {
        background: ${(props) => props.theme['purple-300']};
        border: 1px solid ${(props) => props.theme['purple-500']};
      }
      svg {
        color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
