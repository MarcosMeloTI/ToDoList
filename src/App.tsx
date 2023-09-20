import { ThemeProvider } from 'styled-components'
import { Home } from './page/Home'
import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/default'
import { TodoContextProvider } from './contexts'

function App() {
  return (
    <TodoContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </TodoContextProvider>
  )
}

export default App
