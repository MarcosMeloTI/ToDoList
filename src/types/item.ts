export type Item = {
  id: number
  title: string
  done: boolean
}

export type TaskInputProps = {
  task: Item[]
  setTask: React.Dispatch<React.SetStateAction<Item[]>>
}
