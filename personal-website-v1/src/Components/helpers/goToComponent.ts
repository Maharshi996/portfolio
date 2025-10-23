export const handleSroll = (e: any) => {
  const targetId = (e.target as HTMLElement).getAttribute("data-e2e");
  if (!targetId) {
    console.warn("No data-e2e attribute found on target element.");
    return;
  }
  const targetElement = document.getElementById(targetId);
  if (!targetElement) {
    console.warn(`Element with id ${targetId} not found.`);
    return;
  }
  targetElement.scrollIntoView({ behavior: "smooth" });
};
