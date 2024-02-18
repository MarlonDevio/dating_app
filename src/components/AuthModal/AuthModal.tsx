import "./AuthModal.css";

interface AuthModalProps {
  setShowModal: (showModal: boolean) => void;
}

const AuthModal = ({ setShowModal }: AuthModalProps) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div className="auth-modal">
      <div onClick={handleClick}>ⓧ</div>
      AUTH MODAL!
    </div>
  );
};

export default AuthModal;
