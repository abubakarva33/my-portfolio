import Swal from "sweetalert2";

export const nullLinkWarning = async ({ title, text }) => {
  await Swal.fire({
    icon: "error",
    title: title,
    text: text,
    confirmButtonText: "Got it",
  });
};
