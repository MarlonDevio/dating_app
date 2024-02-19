import "./CloseButton.css";
import { useState } from "react";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = (): void => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      id="icon"
      className={`Icon ${isHovered && "open"}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default CloseButton;
