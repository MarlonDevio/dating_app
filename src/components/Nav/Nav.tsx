import "./Nav.css";
import { logoColor, logoWhite } from "../../assets/images";
import { StyledNavButton } from "../../styles/styledComponents";

interface NavProps {
  minimal: boolean;
  authToken: boolean;
  setShowModal: (showModal: boolean) => void;
  showModal: boolean;
}

const Nav = (props: NavProps) => {
  const handleClick = () => {
    props.setShowModal(true);
  };

  return (
    <nav>
      <figure className="logo-container">
        <img
          className="logo"
          src={props.minimal ? logoWhite : logoColor}
          alt="logo-image"
        />
      </figure>

      {!props.authToken && !props.minimal && (
        <StyledNavButton
          className="nav-button"
          onClick={handleClick}
          disabled={props.showModal}
        >
          Log In
        </StyledNavButton>
      )}
    </nav>
  );
};

export default Nav;
