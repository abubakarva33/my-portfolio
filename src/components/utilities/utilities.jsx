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


const get3DTextStyle = ({
  textColor = "#d1d9e6",
  fontSize = "80px",
  fontWeight = 700,
  shadowColor = "#000000aa",
}) => {
  return {
    color: textColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    letterSpacing: "-2px",
    fontFamily: "jungleFont",
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
