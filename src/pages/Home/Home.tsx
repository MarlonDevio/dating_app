import "./Home.css";
import { Nav } from "../../components/index.ts";
import { StyledButton, StyledOverlay } from "../../styles/styledComponents";

const Home = () => {
  const authToken: boolean = false;

  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <>
      <StyledOverlay>
        <Nav minimal={true} authToken={authToken} />
        <div className="home">
          <h1>Swipe Right</h1>
          <StyledButton $primary onClick={handleClick}>
            {authToken ? "Sign-Out" : "Create Account"}
          </StyledButton>
        </div>
      </StyledOverlay>
    </>
  );
};

export default Home;
