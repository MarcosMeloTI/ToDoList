import { useContext } from 'react'
import { TodoContext } from '../contexts'

export const useTask = () => {
  const context = useContext(TodoContext)
  return context
}
