import { CloseButton, Form } from "..";
import "./AuthModal.css";
import { useState } from "react";
import { StyledButton } from "../../styles/styledComponents";

interface AuthModalProps {
  setShowModal: (showModal: boolean) => void;
}

const AuthModal = ({ setShowModal }: AuthModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div className="auth-modal">
      <CloseButton onClick={handleClick} />
      <StyledButton as="h2">
        {isSignUp ? "CREATE ACCOUNT" : "LOG IN"}
      </StyledButton>
      <p>
        By clicking Log in, you agree to our terms. Learn how we process your
        data in our privacypolicy.
      </p>
      <Form />
    </div>
  );
};

export default AuthModal;
