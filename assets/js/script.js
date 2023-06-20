// const button = document.getElementsByClassName("mobile-responsive");
// const menu = document.getElementsByClassName("menu");

// button[0].addEventListener("click", () => {
//     button.classList.toggle("active");
//   menu.classList.toggle("active");
// });

const handleClick = () => {
  const menu = document.querySelectorAll(".menu");
  menu.classList.toggle("activate");
};
