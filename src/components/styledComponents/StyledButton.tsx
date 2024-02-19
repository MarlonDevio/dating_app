import styled from "styled-components";

const StyledButton = styled.button<{ $primary?: boolean }>`
  color: ${(props) => (props.$primary ? "#fff" : "black")};

  background: ${(props) =>
    props.$primary
      ? "linear-gradient(45deg, var(--color-primary), var(--color-secondary))"
      : "linear-gradient(45deg, var(--color-tertiary), var(--color-quaternary))"};

  text-transform: uppercase;
  font-size: 1.5rem;
  padding: 1.2rem 3rem;
  border-radius: 3rem;
  border: none;

  &:hover {
    background: ${(props) =>
      props.$primary
        ? "linear-gradient(260deg, var(--color-primary), var(--color-secondary))"
        : "linear-gradient(260deg, var(--color-tertiary), var(--color-quaternary))"};

    cursor: pointer;
  }
`;

export default StyledButton;
