import { SubmitHandler, useForm } from 'react-hook-form'
import { Item } from '../../types/item'
import { CreateB } from '../CreateButton'
import { Input } from '../Input'
import { FormContainer } from './style'

type CreateFormProps = {
  onTaskCreate: (data: Item) => void
}

export const CreateForm = ({ onTaskCreate }: CreateFormProps) => {
  const { register, handleSubmit, watch, reset } = useForm<Item>()

  const onSubmit: SubmitHandler<Item> = (data) => {
    console.log(data)
    onTaskCreate(data)
    reset()
  }
  console.log(watch('title'))

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Adicione uma nova tarefa"
        defaultValue=""
        {...register('title', { required: true })}
      />
      <CreateB bgcolor={'blue-dark'} title={'Criar'} />
    </FormContainer>
  )
}
