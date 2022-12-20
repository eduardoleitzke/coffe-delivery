import styled from 'styled-components'

export const AndressCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  padding: 2.5rem;
  gap: 2rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input,
    select {
      width: 12.5rem;
      height: 2.63rem;
      padding: 0.75rem;
      border-radius: 4px;
      background: ${(props) => props.theme['gray-300']};
      border: 1px solid #e6e5e5;

      &:focus {
        color: ${(props) => props.theme['gray-900']};
        outline: 1px solid ${(props) => props.theme['yellow-500']};
      }
    }

    .street {
      width: 100%;
    }

    .numberAndComplement {
      display: flex;
      gap: 1rem;
      width: 100%;

      .complement {
        width: 100%;
      }
    }
    .districtCityUf {
      display: flex;
      width: 100%;
      gap: 1rem;
      .city {
        width: 100%;
      }

      .UF {
        width: 2.625rem;
      }
    }
  }
`
const ICON_COLORS = {
  yellow: 'yellow-700',
  purple: 'purple-500',
} as const

interface CardHeaderProps {
  iconsColor: keyof typeof ICON_COLORS
}

export const CardHeader = styled.header<CardHeaderProps>`
  margin: 0;
  font-family: 'Roboto', sans-serif;

  span {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['gray-900']};
    gap: 0.5rem;
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-700']};
    margin-left: 2rem;
  }
  svg {
    color: ${(props) => props.theme[ICON_COLORS[props.iconsColor]]};
  }
`
