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
