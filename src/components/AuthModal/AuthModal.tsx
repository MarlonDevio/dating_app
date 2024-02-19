import { CloseButton, Form } from '..';
import './AuthModal.css';
import { FormEvent, useState } from 'react';

interface AuthModalProps {
  setShowModal: (showModal: boolean) => void;
  isSignUp: boolean;
  // setIsSignUp?: (isSignUp: boolean) => void;
}

/**
 * AuthModal component displays a modal for user authentication.
 *
 * @component
 * @param {AuthModalProps} props - The props for the AuthModal component.
 * @returns {JSX.Element} The rendered AuthModal component.
 */
const AuthModal = (props: AuthModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  /**
   * Handles the click event of the close button.
   */
  const handleClick = () => {
    props.setShowModal(false);
  };

  /**
   * Handles the form submission event.
   *
   * @param {FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (props.isSignUp && password !== confirmPassword) {
      setError('Passwords do not match!');
    }
    console.log('Make a post request to our database!');
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
    isSignUp: props.isSignUp
  };

  return (
    <div className='auth-modal'>
      <CloseButton onClick={handleClick} />
      <h2>{props.isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
      <p>
        By clicking Log In, you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy.
      </p>
      <Form {...formProps} />
      <h2>GET THE APP</h2>
    </div>
  );
};

export default AuthModal;
