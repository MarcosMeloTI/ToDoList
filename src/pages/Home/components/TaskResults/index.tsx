import clipboard from '../../../../assets/Clipboard.svg'
import { Checkbox } from '../../../../components/Checkbox'
import { DeleteB } from '../../../../components/DeleteButton'
import { useTask } from '../../../../hooks/useTask'
import {
  Completed,
  CountContainer,
  ItemContainer,
  ResultsContainer,
  TaskContainer,
  TasksCreated,
} from './style'

export const TaskResults = () => {
  const {
    task,
    completedItems,
    taskCount,
    taskCompleteCount,
    handleTaskComplete,
    handleTaskDelete,
  } = useTask()

  return (
    <TaskContainer>
      <CountContainer>
        <TasksCreated>
          Tarefas criadas <span>{taskCount}</span>
        </TasksCreated>
        <Completed>
          Concluídas{' '}
          {taskCount > 0 ? (
            <span>
              {taskCompleteCount} de {taskCount}
            </span>
          ) : (
            <span>{taskCount}</span>
          )}
        </Completed>
      </CountContainer>
      {taskCount > 0 ? (
        <ul>
          {task.map((Item) => (
            <ItemContainer key={Item.id}>
              <button onClick={() => handleTaskComplete(Item.id)}>
                <Checkbox />
              </button>
              <span className={completedItems[Item.id] ? 'completed' : ''}>
                {Item.title}
              </span>
              <button onClick={() => handleTaskDelete(Item.id)}>
                <DeleteB />
              </button>
            </ItemContainer>
          ))}
        </ul>
      ) : (
        <ResultsContainer>
          <img src={clipboard} alt="Clipboard" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </ResultsContainer>
      )}
    </TaskContainer>
  )
}
