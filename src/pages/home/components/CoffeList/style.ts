import styled from 'styled-components'

export const CoffeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-left: 15rem;
  margin-right: 15rem;
  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-800']};
  }

  ul {
    display: grid;
    grid-template: auto auto auto auto / auto auto auto auto;
    row-gap: 5rem;
    justify-content: space-between;
  }
`
