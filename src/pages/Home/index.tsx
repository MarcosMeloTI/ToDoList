import { CreateForm } from '../../components/CreateForm'
import { useTask } from '../../hooks/useTask'
import { Header } from './components/Header'
import { TaskResults } from './components/TaskResults'
import { HomeContainer } from './style'

export const Home = () => {
  const { handleTaskCreate } = useTask()

  return (
    <HomeContainer>
      <Header />
      <CreateForm onTaskCreate={handleTaskCreate} />
      <TaskResults />
    </HomeContainer>
  )
}
