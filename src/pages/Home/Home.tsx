import './Home.css';
import { useState } from 'react';
import { Nav, AuthModal } from '../../components/index.ts';
import {
  HeadingOne,
  StyledButton,
  StyledOverlay
} from '../../components/styledComponents';

/**
 * Renders the Home page component.
 *
 * @returns The rendered Home page component.
 */
const Home = () => {
  /**
   * State variables for controlling the visibility of the modal and the sign-up mode.
   */
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  /**
   * Represents the authentication token.
   */
  const authToken: boolean = false;

  /**
   * Props object for the Nav component.
   */
  const NavProps = {
    minimal: false,
    authToken,
    setShowModal,
    showModal,
    setIsSignUp
  };

  /**
   * Handles the click event of the button.
   * Sets the showModal state to true and the isSignUp state to true.
   */
  const handleClick = () => {
    console.log('Clicked!');
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <>
      <StyledOverlay>
        <Nav {...NavProps} />
        <div className='home'>
          <HeadingOne>Blend Together</HeadingOne>

          <StyledButton
            $primary
            onClick={handleClick}
          >
            {authToken ? 'Sign-Out' : 'Create Account'}
          </StyledButton>

          {showModal && (
            <AuthModal
              isSignUp={isSignUp}
              setShowModal={setShowModal}
            />
          )}
        </div>
      </StyledOverlay>
    </>
  );
};

export default Home;
