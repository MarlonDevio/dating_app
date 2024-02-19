import './OnboardingForm.css';

const OnboardingForm = () => {
  return (
    <form>
      <section>
        <label htmlFor='first_name'>First Name</label>
        <input
          type='text'
          name='first_name'
          id='first_name'
        />
      </section>
    </form>
  );
};

export default OnboardingForm;
