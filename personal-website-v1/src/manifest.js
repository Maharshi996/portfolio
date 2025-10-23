import Canvas from "./Components/Canvas.tsx";
import Navbar from "./Components/Navbar.tsx";
import Skils from "./Components/Skils.tsx";
import Projects from "./Components/Projects.tsx";
import Experiences from "./Components/Experiences/experiences.tsx";
import ContactForm from "./Components/Contact/ContactForm.tsx";
import Certifications from "./Components/Certifications.tsx";
import SocialLinks from "./Components/SocialLinks.tsx";
export const componentMap = {
  canvas: Canvas,
  navbar: Navbar,
  skills: Skils,
  projects: Projects,
  experience: Experiences,
  contact: ContactForm,
  certifications: Certifications,
  socialMedia: SocialLinks,
  // Add other components here as needed
};
