import "./Nav.css";
import { logoColor, logoWhite } from "../../assets/images";
import { StyledNavButton } from "../../styles/styledComponents";

interface NavProps {
  minimal: boolean;
  authToken: boolean;
  setShowModal: (showModal: boolean) => void;
}

const Nav = ({ minimal, authToken, setShowModal }: NavProps) => {
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <nav>
      <figure className="logo-container">
        <img
          className="logo"
          src={minimal ? logoWhite : logoColor}
          alt="logo-image"
        />
      </figure>

      {!authToken && !minimal && (
        <StyledNavButton className="nav-button" onClick={handleClick}>
          Log In
        </StyledNavButton>
      )}
    </nav>
  );
};

export default Nav;
