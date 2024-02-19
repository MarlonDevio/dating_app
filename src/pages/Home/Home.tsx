import "./Home.css";
import { useState } from "react";
import { Nav, AuthModal } from "../../components/index.ts";
import { StyledButton, StyledOverlay } from "../../styles/styledComponents";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const authToken: boolean = false;

  const handleClick = () => {
    console.log("Clicked!");
    setShowModal(true);
  };

  return (
    <>
      <StyledOverlay>
        <Nav
          minimal={false}
          authToken={authToken}
          setShowModal={setShowModal}
          showModal={showModal}
        />

        <div className="home">
          <h1>Swipe Right</h1>

          <StyledButton $primary onClick={handleClick}>
            {authToken ? "Sign-Out" : "Create Account"}
          </StyledButton>

          {showModal && <AuthModal setShowModal={setShowModal} />}
        </div>
      </StyledOverlay>
    </>
  );
};

export default Home;
