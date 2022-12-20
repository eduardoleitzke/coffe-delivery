import { Router } from './Router'
import { GlobalStyle } from './global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/Default'
import { CoffeListProvider } from './contexts/CoffeListContext'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeListProvider>
        <Router />
      </CoffeListProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
