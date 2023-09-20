import logo from '../../assets/rocket.svg'
import logo2 from '../../assets/todo.svg'
import { LogoContainer } from './style'

export const Logo = () => {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo" />
      <img src={logo2} alt="Logo2" />
    </LogoContainer>
  )
}
