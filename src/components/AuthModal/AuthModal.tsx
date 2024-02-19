import { CloseButton, Form } from "..";
import "./AuthModal.css";
import { FormEvent, useState } from "react";
import { StyledButton } from "../../styles/styledComponents";

interface AuthModalProps {
  setShowModal: (showModal: boolean) => void;
}

const AuthModal = ({ setShowModal }: AuthModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match!");
    }
    console.log("Make a post request to our database!");
  };

  const formProps = {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError,
    handleSubmit,
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
      <Form {...formProps} />
      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
};

export default AuthModal;
