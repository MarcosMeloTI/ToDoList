import { useState } from 'react'
import { CreateForm } from '../../components/CreateForm'
import { useTask } from '../../hooks/useTask'
import { Item } from '../../types/item'
import { Header } from './components/Header'
import { TaskResults } from './components/TaskResults'
import { HomeContainer } from './style'

export const Home = () => {
  const { task, setTask } = useTask()
  const [nextId, setNextId] = useState(0)

  const handleTaskCreate = (newTask: Item) => {
    const taskWithId = { ...newTask, id: nextId }
    setNextId(nextId + 1)
    setTask([...task, taskWithId])
    console.log('Id:', nextId)
  }

  return (
    <HomeContainer>
      <Header />
      <CreateForm onTaskCreate={handleTaskCreate} />
      <TaskResults />
    </HomeContainer>
  )
}
