import styled from 'styled-components'

export const CreateContainer = styled.button`
  width: 100%;
  max-width: 5.625rem;
  height: 3.25rem;
  display: flex;
  align-items: center;

  padding: 1rem;
  gap: 0.5rem;

  border: none;
  border-radius: 0.5rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeight.small};

  color: ${({ theme }) => theme.colors['gray-100']};
  background-color: ${({ theme }) => theme.colors['blue-dark']};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
  }
`
