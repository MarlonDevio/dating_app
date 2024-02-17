import "./Home.css";
import { Nav } from "../../components/index.ts";

const Home = () => {
  const authToken: boolean = true;

  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div className="home">
      <Nav />
      <h1>Swipe Right</h1>
      <button className="primary-button" onClick={handleClick}>
        {authToken ? "Sign-Out" : "Create Account"}
      </button>
    </div>
  );
};

export default Home;
