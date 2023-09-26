import styled from 'styled-components'

export const TaskContainer = styled.div`
  width: 90%;
  max-width: 46rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0 3rem 0;
  gap: 1.5rem;

  button {
    display: flex;
    align-items: center;

    border: none;
    border-radius: 5rem;
    background-color: ${({ theme }) => theme.colors['gray-400']};
  }

  ul {
    width: 100%;
    max-width: 46rem;
  }
`

export const ResultsContainer = styled.div`
  width: 100%;
  max-width: 46rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 4rem;

  color: ${({ theme }) => theme.colors['gray-300']};

  border-top: 1px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: 0.5rem;

  p {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: ${({ theme }) => theme.lineHeight.small};
  }
`

export const CountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    min-width: 1.562rem;
    height: 1.187rem;
    padding: 2px 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors['gray-200']};
    background-color: ${({ theme }) => theme.colors['gray-400']};
    border-radius: 62.437rem;
  }
`

export const TasksCreated = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.sm};
`

export const Completed = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.fontSize.sm};
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  max-width: 46rem;
  min-height: 4.5rem;

  margin-top: 0.75rem;
  padding: 1rem;
  gap: 0.75rem;

  border-radius: 0.5rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeight.small};

  background-color: ${({ theme }) => theme.colors['gray-400']};
  color: ${({ theme }) => theme.colors['gray-100']};

  .completed {
    color: ${({ theme }) => theme.colors['gray-300']};
    text-decoration: line-through;
  }
`
