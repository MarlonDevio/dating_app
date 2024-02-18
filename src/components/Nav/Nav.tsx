import "./Nav.css";
import { logoColor, logoWhite } from "../../assets/images";
import { StyledNavButton } from "../../styles/styledComponents";

interface NavProps {
  minimal: boolean;
  authToken: boolean;
}

const Nav = ({ minimal, authToken }: NavProps) => {
  return (
    <nav>
      <figure className="logo-container">
        <img
          className="logo"
          src={minimal ? logoWhite : logoColor}
          alt="logo-image"
        />
      </figure>
      {!authToken && (
        <StyledNavButton className="nav-button">Log In</StyledNavButton>
      )}
    </nav>
  );
};

export default Nav;
