import styled from 'styled-components'

export const HomeIntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  margin: 5.875rem 0;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-top: 5rem;
  background-image: url('src/assets/Home/HomeIntro/Background.svg');
  background-repeat: no-repeat;
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['gray-900']};
    width: 70%;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  p {
    color: ${(props) => props.theme['gray-800']};
    line-height: 1.3;
    font-size: 1.25rem;
    width: 60%;
    margin-bottom: 4.125rem;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template: 1fr 1fr/ 1fr 1fr;
    gap: 1rem;
    justify-content: start;
    width: 60%;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-family: 'Roboto', sans-serif;
      width: 120%;
      div {
        height: 2rem;
        width: 2rem;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        border-radius: 50%;
      }
      .listHomeIntroOne {
        background-color: ${(props) => props.theme['yellow-700']};
      }
      .listHomeIntroTwo {
        background-color: ${(props) => props.theme['gray-700']};
      }
      .listHomeIntroThree {
        background-color: ${(props) => props.theme['yellow-500']};
      }
      .listHomeIntroFour {
        background-color: ${(props) => props.theme['purple-500']};
      }
      span {
        font-size: 0.95rem;
        line-height: 1.3;
        color: ${(props) => props.theme['gray-700']};
      }
    }
  }
  .textContainer {
    margin-left: 15rem;
  }
  .CoffeImage {
    margin-right: 15rem;
    margin-bottom: 3rem;
  }
`
