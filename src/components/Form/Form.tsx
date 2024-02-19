import "./Form.css";
import { FormEvent } from "react";
import { StyledSecondaryButton } from "../../styles/styledComponents";

interface FormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  error: string;
  setError: (error: string) => void;
  handleSubmit: (e: FormEvent) => void;
}

const Form = ({ ...FormProps }: FormProps) => {
  return (
    <form className={"form"} onSubmit={FormProps.handleSubmit}>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="email"
        required={true}
        onChange={(e) => FormProps.setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
        required={true}
        onChange={(e) => FormProps.setPassword(e.target.value)}
      />
      <input
        type="password"
        id="password-check"
        name="password-check"
        placeholder="confirm password"
        required={true}
        onChange={(e) => FormProps.setConfirmPassword(e.target.value)}
      />

      <StyledSecondaryButton as="input" type="submit" />
      <p>{FormProps.error}</p>
    </form>
  );
};

export default Form;
