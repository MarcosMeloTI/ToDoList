import { InputHTMLAttributes, forwardRef } from 'react'
import { InputContainer } from './style'

type InputProps = InputHTMLAttributes<HTMLInputElement> & unknown

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return <InputContainer {...props} ref={ref} />
  },
)

Input.displayName = 'Input'
