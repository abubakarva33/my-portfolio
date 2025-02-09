import "./Utilities.css";
import Swal from "sweetalert2";

export const nullLinkWarning = async ({ title, text }) => {
  await Swal.fire({
    icon: "error",
    title: title,
    text: text,
    confirmButtonText: "Got it",
  });
};

export const dynamicSize = (percentage) => {
  return `${(window.innerWidth * 100) / 100 / percentage}px`;
};

import React from 'react';

const get3DTextStyle = ({
  textColor = '#d1d9e6',
  fontSize = '80px',
  fontWeight = 'bold',
  // depth = 10,               // Control how deep the 3D effect appears
  perspective = 800,        // Adjust the viewing angle
  rotateX = 20,             // Tilt along X-axis for 3D
  rotateY = -20,            // Tilt along Y-axis for 3D
  shadowColor = '#000000aa' // Shadow to enhance depth
}) => {
  return {
    color: textColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    position: 'relative',
    display: 'inline-block',
    letterSpacing: '-2px',
    fontFamily: 'jungleFont',
    transformStyle: 'preserve-3d',
    perspective: `${perspective}px`,
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    textShadow: `
      1px 1px ${shadowColor},
      2px 2px ${shadowColor},
      3px 3px ${shadowColor},
      4px 4px ${shadowColor},
      5px 5px ${shadowColor}
    `,
  };
};

const ThreeDText = ({ word, styleProps }) => {
  const style = get3DTextStyle(styleProps);
  return <span style={style}>{word}</span>;
};

export default ThreeDText;
