import { useState } from 'react'
import check from '../../assets/Checkbox.svg'
import checked from '../../assets/checkboxOn.svg'
import { CheckContainer } from './style'

export const Checkbox = () => {
  const [done, setDone] = useState(false)

  const toggleCheckbox = () => {
    setDone(!done)
  }

  return (
    <CheckContainer>
      {done ? (
        <img
          id="checkbox1"
          src={checked}
          alt="CheckboxMarked"
          onClick={toggleCheckbox}
        />
      ) : (
        <img
          id="checkbox2"
          src={check}
          alt="Checkbox"
          onClick={toggleCheckbox}
        />
      )}
    </CheckContainer>
  )
}
