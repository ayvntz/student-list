import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "./Icon";

const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <CopyWrapper>
      <Tooltip $isCopied={isCopied}>Copied</Tooltip>
      <CopyButtonStyled onClick={handleCopy} aria-label="Copy to clipboard">
        <Icon
          name={isCopied ? "check" : "copy"}
          color="#fff"
          backgroundColor="#4285f4"
          size={16}
        />
      </CopyButtonStyled>
    </CopyWrapper>
  );
};

const CopyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  cursor: pointer;
`;

const CopyButtonStyled = styled.button`
  background: #007bff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  transition: background-color 0.2s, transform 0.1s;
  border-radius: 6px;
  height: 32px;
  width: 32px;

  &:hover {
    background-color: #007bff;
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: #fff;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: ${({ $isCopied }) => ($isCopied ? "1" : "0")};
  visibility: ${({ $isCopied }) => ($isCopied ? "visible" : "hidden")};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CopyButton;
