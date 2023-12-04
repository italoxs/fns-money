import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 8px;
    border: 0;
    background: ${(props) => props.theme['bluegray-900']};
    color: ${(props) => props.theme['bluegray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['bluegray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    border: 1px solid ${(props) => props.theme['teal-300']};
    border-radius: 8px;
    padding: 1rem;
    background: transparent;
    color: ${(props) => props.theme['teal-300']};
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['teal-500']};
      border-color: ${(props) => props.theme['teal-500']};
      color: ${(props) => props.theme.white};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }
`
