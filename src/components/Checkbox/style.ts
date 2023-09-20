import styled from 'styled-components'

export const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.19rem;

  border-radius: 0.5rem;

  cursor: pointer;

  #checkbox2:hover {
    background-color: ${({ theme }) => theme.colors['blue-dark']};
    opacity: 0.6;
    border-radius: 0.5rem;
  }

  #checkbox1:hover {
    background-color: ${({ theme }) => theme.colors.purple};
    opacity: 0.9;
    border-radius: 0.5rem;
  }
`
