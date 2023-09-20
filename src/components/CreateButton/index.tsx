import { ButtonHTMLAttributes } from 'react'
import plus from '../../assets/plus.svg'
import { CreateContainer } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgcolor: 'blue-dark' | 'white' | 'blue'
  title: string
}

export const CreateB = ({ title, ...props }: ButtonProps) => {
  return (
    <CreateContainer type="submit" {...props}>
      {title}
      <img src={plus} alt="Plus" />
    </CreateContainer>
  )
}
