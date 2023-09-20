import { ReactNode, createContext, useState } from 'react'

type Item = {
  id: number
  title: string
  done: boolean
}

type TaskInputProps = {
  task: Item[]
  setTask: React.Dispatch<React.SetStateAction<Item[]>>
}

export const TodoContext = createContext({} as TaskInputProps)

type TodoContextProviderProps = {
  children: ReactNode
}

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [task, setTask] = useState<Item[]>([])
  return (
    <TodoContext.Provider value={{ task, setTask }}>
      {children}
    </TodoContext.Provider>
  )
}
