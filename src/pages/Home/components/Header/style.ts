import styled from 'styled-components'

export const HeaderContainer = styled.div`
  min-width: 100vw;
  height: 12.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors['gray-700']};
`
