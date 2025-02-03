import { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Modal Overlay (Dark Background)
const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

// Styled Modal Content (Main Window)
const ModalContent = styled.div`
  width: ${({ $width }) => $width || "854px"};
  height: ${({ $height }) => $height || "786px"};
  max-width: 1300px;
  background: #f5f5f5;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #ccd0d5;
  position: relative;
  display: flex;
  flex-direction: column;
  transform: ${({ $isOpen }) => ($isOpen ? "scale(1)" : "scale(0.9)")};
  transition: transform 0.3s ease;
`;

// Styled Close Button (Top-Right)
const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;

// Modal Component
const Modal = ({ isOpen, onClose, children, width, height }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay $isOpen={isOpen} onClick={onClose}>
      <ModalContent
        $isOpen={isOpen}
        $width={width}
        $height={height}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>✕</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Modal;
