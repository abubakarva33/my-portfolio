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

const getNeomorphismTextStyle = ({
  backgroundColor = "#212428", // Dark background
  textColor = "var(--color-primary)",
  fontSize = "30px",
  fontWeight = "bold",
}) => {
  return {
    display: "inline-block",
    backgroundColor: backgroundColor,
    color: textColor, // Slight contrast to make text visible
    fontSize: fontSize,
    fontWeight: fontWeight,
    letterSpacing: "-2px",
    textShadow: "rgb(17 19 20) 10px 10px 10px, rgb(31 35 39) -10px -10px 10px",
  };
};

const NeomorphicWord = ({ word, styleProps }) => {
  const style = getNeomorphismTextStyle(styleProps);
  return <span style={style}>{word}</span>;
};

export default NeomorphicWord;
