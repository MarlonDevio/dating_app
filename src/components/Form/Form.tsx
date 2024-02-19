import "./Form.css";
import { FormEvent, useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  console.log(email, password, confirmPassword);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="email"
        required={true}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
        required={true}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password-check"
        id="password-check"
        name="password-check"
        placeholder="confirm password"
        required={true}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </form>
  );
};

export default Form;
