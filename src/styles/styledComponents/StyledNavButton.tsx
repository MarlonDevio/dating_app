import styled from "styled-components";

const StyledNavButton = styled.button`
  color: var(--color-primary);
  background-color: var(--color-tertiary);
  font-size: 2rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: var(--color-tertiary-dark);
    color: var(--color-primary-dark);

    &:hover {
      cursor: not-allowed;
    }
  }
`;

export default StyledNavButton;
