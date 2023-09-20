import { useState } from 'react'
import trash from '../../assets/Delete.svg'
import trashHover from '../../assets/DeleteHover.svg'
import { DeleteContainer } from './style'

export const DeleteB = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <DeleteContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={isHovered ? trashHover : trash} alt="Delete" />
    </DeleteContainer>
  )
}
