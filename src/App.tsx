import { ThemeProvider } from 'styled-components'
import { TodoContextProvider } from './contexts'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/default'

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
