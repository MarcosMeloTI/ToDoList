import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 12.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors['gray-700']};
`
