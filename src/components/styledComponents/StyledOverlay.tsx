import styled from "styled-components";
import { backgroundLanding } from "../../assets/images";

const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${backgroundLanding});
  background-size: cover;
  background-position: center;
`;

export default StyledOverlay;
