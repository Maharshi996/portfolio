import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { usePageContext } from "../Context/pageContext";
import { Typography } from "@mui/material";
import { handleClick } from "./helpers/goToComponent.ts";

function Navbar(props) {
  const { data } = props;

  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setTransparent(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        position: "sticky",
        top: "0px",
        gap: "5vw",
        padding: "0 2vw",
        backdropFilter: "blur(10px)",
        borderBottom: transparent ? "1px solid purple" : "0px",
        background: transparent
          ? "rgba(255, 255, 255, 0.1) " // Fully transparent black
          : "linear-gradient(to left, #000000 0%)",
        color: "white",
        height: "5vw",
        zIndex: 1000,
      }}
    >
      {data?.links?.map((link, index) => {
        return (
          <Typography
            key={index}
            data-e2e={link?.path}
            onClick={(e) => handleClick(e)}
          >
            {link?.label}
          </Typography>
        );
      })}
    </Box>
  );
}

export default Navbar;
