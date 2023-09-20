import styled from 'styled-components'

export const DeleteContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border-radius: 0.25rem;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['gray-500']};
  }
`
