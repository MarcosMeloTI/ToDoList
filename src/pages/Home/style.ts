import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;

  background-color: ${({ theme }) => theme.colors['gray-600']};
`
