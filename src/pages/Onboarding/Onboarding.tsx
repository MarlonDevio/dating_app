import "./Onboarding.css";
import { Nav, OnboardingForm } from "../../components";

const Onboarding = () => {
  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
      </div>
      <OnboardingForm />
    </>
  );
};

export default Onboarding;
