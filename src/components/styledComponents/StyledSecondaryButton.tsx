import styled from "styled-components";
import { StyledButton } from "./index.ts";

const StyledSecondaryButton = styled(StyledButton)`
  font-weight: 500;
  font-size: 1.5rem;
  border: 2px solid var(--color-tertiary-dark);
  margin: 6px;
  background: white;
`;
export default StyledSecondaryButton;
