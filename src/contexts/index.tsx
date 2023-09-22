import { ReactNode, createContext, useState } from 'react'

export type Item = {
  id: number
  title: string
  done: boolean
}

type TaskInputProps = {
  task: Item[]
  setTask: React.Dispatch<React.SetStateAction<Item[]>>
  completedItems: { [key: number]: boolean }
  setCompletedItems: React.Dispatch<
    React.SetStateAction<{ [key: number]: boolean }>
  >
  handleTaskComplete: (id: number) => void
  handleTaskDelete: (id: number) => void
  taskCount: number
  taskCompleteCount: number
  handleTaskCreate: (newTask: Item) => void
}

export const TodoContext = createContext({} as TaskInputProps)

type TodoContextProviderProps = {
  children: ReactNode
}

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [task, setTask] = useState<Item[]>([])
  const [completedItems, setCompletedItems] = useState<{
    [key: number]: boolean
  }>({})
  const [nextId, setNextId] = useState(0)

  // Function of create next ID
  const handleTaskCreate = (newTask: Item) => {
    const taskWithId = { ...newTask, id: nextId }
    setNextId(nextId + 1)
    setTask([...task, taskWithId])
    console.log('Id:', nextId)
  }

  // Functions of Complete and Delete Tasks
  const handleTaskComplete = (id: number) => {
    setTask((prevTask) =>
      prevTask.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    )

    setCompletedItems((prevCompletedItems: { [key: number]: boolean }) => ({
      ...prevCompletedItems,
      [id]: !prevCompletedItems[id] || false,
    }))
  }

  const handleTaskDelete = (id: number) => {
    setTask((prevTask) => prevTask.filter((item) => item.id !== id))
  }

  // Count tasks
  const taskCount = task.length
  const taskCompleteCount = task.filter((item) => item.done).length

  return (
    <TodoContext.Provider
      value={{
        task,
        setTask,
        completedItems,
        setCompletedItems,
        handleTaskComplete,
        handleTaskDelete,
        taskCount,
        taskCompleteCount,
        handleTaskCreate,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
