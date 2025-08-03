export const handleClick = (e) => {
  const targetId = e.target.getAttribute("data-e2e");
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn(`Element with id ${targetId} not found.`);
  }
};
