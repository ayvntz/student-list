import styled from "styled-components";
import PropTypes from "prop-types";

const StyledIcon = styled.svg`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  cursor: pointer;

  path,
  polygon {
    fill: ${({ $fill, $hasStroke }) => ($hasStroke ? "none" : $fill)};
    stroke: ${({ $stroke, $hasStroke }) => ($hasStroke ? $stroke : "none")};
  }

  rect.background {
    fill: ${({ $backgroundColor }) => $backgroundColor};
  }
`;

const ICONS = {
  CHECK: {
    viewBox: "0 0 24 24",
    hasStroke: true,
    content: (
      <path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  ARROW_LEFT: {
    viewBox: "0 0 24 24",
    hasStroke: true,
    content: (
      <path
        d="M15 4L7 12L15 20"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  COPY: {
    viewBox: "0 0 442 442",
    hasStroke: false,
    content: (
      <>
        <polygon points="291,0 51,0 51,332 121,332 121,80 291,80" />
        <polygon points="306,125 306,195 376,195" />
        <polygon points="276,225 276,110 151,110 151,442 391,442 391,225" />
      </>
    ),
  },
  LOADING: {
    viewBox: "0 0 200 100",
    hasStroke: false,
    content: (
      <g transform="translate(100, 50)">
        <circle cx="-20" cy="0" r="8" fill="#3b82f6">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
          />
        </circle>
        <circle cx="0" cy="0" r="8" fill="#3b82f6">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="1s"
            repeatCount="indefinite"
            begin="0.2s"
          />
        </circle>
        <circle cx="20" cy="0" r="8" fill="#3b82f6">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="1s"
            repeatCount="indefinite"
            begin="0.4s"
          />
        </circle>
      </g>
    ),
  },
  USER: {
    viewBox: "0 0 32 32",
    hasStroke: false,
    content: (
      <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
    ),
  },
  GEAR: {
    viewBox: "0 0 100 100",
    hasStroke: false,
    content: (
      <path d="M88.553,43.441l-10.276-1.013c-0.661-2.466-1.644-4.832-2.936-7.059l6.561-7.993c0.703-0.859,0.639-2.111-0.145-2.893l-6.24-6.243c-0.42-0.419-0.97-0.633-1.525-0.633c-0.485,0-0.97,0.162-1.369,0.491L64.63,24.66c-2.231-1.293-4.596-2.276-7.06-2.936l-1.011-10.278C56.45,10.342,55.522,9.5,54.412,9.5h-8.823c-1.11,0-2.038,0.842-2.148,1.946L42.43,21.727c-2.464,0.66-4.829,1.643-7.054,2.936l-7.998-6.564c-0.4-0.329-0.884-0.49-1.369-0.49c-0.555,0-1.105,0.212-1.525,0.633l-6.24,6.241c-0.784,0.782-0.848,2.037-0.145,2.893l6.566,7.996c-1.291,2.225-2.277,4.59-2.936,7.057l-10.281,1.013C10.343,43.547,9.5,44.477,9.5,45.587v8.825c0,1.11,0.843,2.04,1.947,2.146l10.281,1.013c0.659,2.466,1.644,4.829,2.936,7.054l-6.562,7.994c-0.708,0.858-0.648,2.111,0.14,2.895l6.24,6.242c0.42,0.418,0.97,0.631,1.525,0.631c0.485,0,0.97-0.162,1.369-0.489l7.993-6.562c2.231,1.293,4.59,2.276,7.06,2.938l1.011,10.279c0.109,1.104,1.038,1.946,2.148,1.946h8.823c1.11,0,2.039-0.842,2.148-1.946l1.011-10.278c2.469-0.66,4.829-1.643,7.06-2.939l7.993,6.562c0.4,0.327,0.884,0.489,1.369,0.489c0.555,0,1.105-0.213,1.525-0.631l6.24-6.242c0.788-0.783,0.848-2.037,0.14-2.895l-6.557-7.991c1.292-2.228,2.275-4.591,2.936-7.057l10.276-1.013c1.104-0.109,1.947-1.036,1.947-2.146v-8.825C90.5,44.477,89.657,43.55,88.553,43.441z M50.002,61.95c-6.603,0-11.953-5.351-11.953-11.95c0-6.602,5.351-11.951,11.953-11.951c6.598,0,11.948,5.349,11.948,11.951C61.951,56.599,56.6,61.95,50.002,61.95z" />
    ),
  },
  USER_ADD: {
    viewBox: "0 0 24 24",
    hasStroke: false,
    content: (
      <path d="M9.5 5A4.5 4.5 0 1 1 5 9.5 4.5 4.5 0 0 1 9.5 5zM4.64 15.7c1.23-.53 2.85-.7 4.86-.7s3.63.17 4.86.7c1.34.58 2.15 1.57 2.58 2.98.2.66-.3 1.32-1 1.32H3.03c-.68 0-1.18-.66-1-1.32.43-1.41 1.24-2.4 2.58-2.98zM19 3v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1V7h-2c-.55 0-1-.45-1-1s.45-1 1-1h2V3c0-.55.45-1 1-1s1 .45 1 1z" />
    ),
  },
  DELETE: {
    viewBox: "0 0 24 24",
    hasStroke: true,
    content: (
      <>
        <path
          d="M10 11V17"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 11V17"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 7H20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  OPTIONS_VERTICAL: {
    viewBox: "0 0 1024 1024",
    hasStroke: false,
    content: (
      <path d="M388.8 896.4v-27.198c.6-2.2 1.6-4.2 2-6.4 8.8-57.2 56.4-102.4 112.199-106.2 62.4-4.4 115.2 31.199 132.4 89.199 2.2 7.6 3.8 15.6 5.8 23.4v27.2c-.6 1.8-1.6 3.399-1.8 5.399-8.6 52.8-46.6 93-98.6 104.4-4 .8-8 2-12 3h-27.2c-1.8-.6-3.6-1.6-5.4-1.8-52-8.4-91.599-45.4-103.6-96.8-1.2-5-2.6-9.6-3.8-14.2z" />
    ),
  },
};

const Icon = ({
  size = 16,
  color = "#333",
  backgroundColor,
  name,
  className,
  onClick,
}) => {
  const icon = ICONS[name.toUpperCase()];

  if (!icon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const content =
    typeof icon.content === "function"
      ? icon.content({
          backgroundColor: backgroundColor || color,
          foregroundColor: icon.hasBackground ? "white" : color,
        })
      : icon.content;

  return (
    <StyledIcon
      $size={size}
      $fill={color}
      $stroke={color}
      $backgroundColor={backgroundColor || color}
      $hasStroke={icon.hasStroke}
      viewBox={icon.viewBox}
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      {content}
    </StyledIcon>
  );
};

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(ICONS).map((key) => key.toLowerCase()))
    .isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
