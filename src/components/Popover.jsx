import { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import optionsVerticalIcon from "../assets/options-vertical.svg";

const PopoverWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TriggerButton = styled.button`
  background: ${({ $isActive }) =>
    $isActive ? "rgba(0, 0, 0, 0.1)" : "transparent"};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: background-color 0.2s, transform 0.1s;
  border-radius: 6px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active,
  &:focus {
    background-color: rgba(0, 0, 0, 0.15);
    transform: scale(0.98);
  }

  img {
    width: 24px;
    height: 24px;
    display: block;
  }
`;

const PopoverContent = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 4px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.05),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 8px;
  min-width: 180px;
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-8px)"};
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
`;

const PopoverItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  text-align: left;
  background: ${({ $isFocused }) => ($isFocused ? "#e5e7eb" : "transparent")};
  border: none;
  cursor: pointer;
  color: #333;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background: #f3f4f6;
  }

  &:focus {
    background: #e5e7eb;
    outline: none;
  }

  &:active {
    background: #d1d5db;
    transform: scale(0.98);
  }
`;

const Popover = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuRef = useRef(null);

  const closePopover = () => {
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closePopover();
    }
  }, []);

  const handleEscapeKey = useCallback((event) => {
    if (event.key === "Escape") {
      closePopover();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      setFocusedIndex(-1);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, handleClickOutside, handleEscapeKey]);

  const handleKeyDown = (event) => {
    if (!isOpen) return;
    if (event.key === "ArrowDown") {
      setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
    } else if (event.key === "ArrowUp") {
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
    } else if (event.key === "Enter" && focusedIndex >= 0) {
      options[focusedIndex].onClick();
      closePopover();
    }
  };

  return (
    <PopoverWrapper ref={menuRef} onKeyDown={handleKeyDown}>
      <TriggerButton
        onClick={() => setIsOpen((prev) => !prev)}
        $isActive={isOpen}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <img
          src={optionsVerticalIcon}
          alt="Options menu"
          width="24"
          height="24"
        />
      </TriggerButton>
      <PopoverContent $isOpen={isOpen} role="menu">
        {options.map((option, index) => (
          <PopoverItem
            key={index}
            onClick={() => {
              option.onClick();
              closePopover();
            }}
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            onFocus={() => setFocusedIndex(index)}
            $isFocused={focusedIndex === index}
          >
            {option.label}
          </PopoverItem>
        ))}
      </PopoverContent>
    </PopoverWrapper>
  );
};

Popover.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Popover;
