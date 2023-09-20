import styled from 'styled-components'

export const InputContainer = styled.input`
  width: 100%;
  max-width: 39.875rem;
  height: 3.375rem;

  padding: 1rem;

  border: none;
  border-radius: 0.5rem;

  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: ${({ theme }) => theme.lineHeight.small};

  color: ${({ theme }) => theme.colors['gray-300']};
  background-color: ${({ theme }) => theme.colors['gray-500']};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors['purple-dark']};
    color: ${({ theme }) => theme.colors['gray-100']};
  }
`
