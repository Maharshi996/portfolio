import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, IconButton, Drawer } from "@mui/material";

import { handleSroll } from "./helpers/goToComponent.ts";
import { useDeviceType } from "../utils/compatible.ts";

function Navbar(props: any) {
  const { data } = props;
  const [transparent, setTransparent] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isMobile, isTablet } = useDeviceType();

  useEffect(() => {
    const handleScroll = () => setTransparent(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

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
          ? "rgba(255, 255, 255, 0.1) "
          : "linear-gradient(transparent 95%, rgba(255,255,255,0.05) 95%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.05) 95%)",
        backgroundSize: "0.8vw 0.8vw",
        color: "white",
        height: isMobile ? "18vw" : isTablet ? "10vw" : "5vw",
        zIndex: 1000,
      }}
    >
      {isMobile || isTablet ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{ ml: 1 }}
          >
            <span style={{ fontSize: 28 }}>&#9776;</span>
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
            <Box
              sx={{
                width: 250,
                p: 2,
                background: "linear-gradient(to left, #000000 0%)",
                height: "100%",
                color: "white",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {data?.links?.map((link: any, index: any) => (
                <Typography
                  key={index}
                  data-e2e={link?.path}
                  onClick={(e) => {
                    handleSroll(e);
                    handleDrawerClose();
                  }}
                  sx={{ my: 2, cursor: "pointer" }}
                >
                  {link?.label}
                </Typography>
              ))}
            </Box>
          </Drawer>
        </>
      ) : (
        data?.links?.map((link: any, index: any) => (
          <Typography
            key={index}
            data-e2e={link?.path}
            onClick={(e) => handleSroll(e)}
          >
            {link?.label}
          </Typography>
        ))
      )}
    </Box>
  );
}

export default Navbar;
