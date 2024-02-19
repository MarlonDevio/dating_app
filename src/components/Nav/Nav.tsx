import "./Nav.css";
import { logoColor, logoWhite } from "../../assets/images";
import { StyledNavButton } from "../styledComponents";

interface NavProps {
  minimal: boolean;
  authToken?: boolean;
  setShowModal: (showModal: boolean) => void;
  showModal: boolean;
  setIsSignUp?: (isSignUp: boolean) => void;
}

const Nav = (props: NavProps) => {
  const handleClick = () => {
    props.setShowModal(true);
    if (props.setIsSignUp) props.setIsSignUp(false);
  };

  return (
    <nav>
      <figure className="logo-container">
        <img
          className="logo"
          src={props.minimal ? logoColor : logoWhite}
          alt="logo-image"
          // style={{ position: "relative", zIndex: 1000 }}
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
