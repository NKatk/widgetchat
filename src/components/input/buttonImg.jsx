import React from 'react';

const ButtonImg = ({ color = 'white' }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5125 26.25L28.75 15L2.5125 3.75L2.5 12.5L21.25 15L2.5 17.5L2.5125 26.25Z"
      fill={color}
    />
  </svg>
);

export default ButtonImg;
