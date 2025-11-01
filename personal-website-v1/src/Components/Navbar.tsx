import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, IconButton, Drawer } from "@mui/material";
import { urlFor } from "../utils-sanity/imageBuilder";

import { handleSroll } from "./helpers/goToComponent.ts";
import { useDeviceType } from "../utils/compatible.ts";

function Navbar(props: any) {
  const { data } = props;
  const { links, images } = data;
  const [transparent, setTransparent] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isMobile, isTablet } = useDeviceType();

  useEffect(() => {
    const handleScroll = () => setTransparent(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLogoPresent = images?.length < 0;

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const renderLink = (
    link: any,
    index: any,
    additionalOnClick?: () => void
  ) => (
    <Typography
      key={index}
      data-e2e={link?.path}
      onClick={(e) => {
        handleSroll(e);
        if (additionalOnClick) additionalOnClick();
      }}
      sx={{
        my: 2,
        cursor: "pointer",
        ":hover": {
          textShadow: "0px 0px 10px rgba(230, 149, 235, 1)",
        },
      }}
    >
      {link?.label}
    </Typography>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0px",
        borderBottom: transparent ? "1px solid purple" : "0px",
        backdropFilter: "blur(10px)",
        background: transparent
          ? "rgba(255, 255, 255, 0.1) "
          : "linear-gradient(transparent 95%, rgba(255,255,255,0.05) 95%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.05) 95%)",
        backgroundSize: "0.8vw 0.8vw",
        zIndex: 1000,
      }}
    >
      {isLogoPresent && (
        <Box
          component="img"
          src={urlFor(images?.[0]?.asset?._ref).url()}
          alt="Maharshi-logo"
          sx={{
            height: isMobile ? "14vw" : isTablet ? "6vw" : "4vw",
            width: isMobile ? "14vw" : isTablet ? "6vw" : "4vw",
            background: "inherit",
            objectFit: isMobile ? "unset" : "contain",
            margin: isMobile ? "3vw 8vw" : isTablet ? "1vw 8vw" : "1vw 8vw",
          }}
        />
      )}
      {!isLogoPresent && (
        <Typography
          component="span"
          sx={{
            color: "white",
            fontSize: isMobile ? "5vw" : isTablet ? "4vw" : "2vw",
            px: isMobile ? "10vw" : isTablet ? "4vw" : "8vw",
            fontWeight: "bold",
            fontFamily: "IBM Plex Mono, monospace",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            textShadow: "0px 0px 10px rgba(230, 149, 235, 1)",
          }}
        >
          {"<M./>"}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          gap: "5vw",
          padding: "0 2vw",
          color: "white",
          height: isMobile ? "18vw" : isTablet ? "10vw" : "5vw",
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
                {links?.map((link: any, index: any) =>
                  renderLink(link, index, handleDrawerClose)
                )}
              </Box>
            </Drawer>
          </>
        ) : (
          links?.map((link: any, index: any) => renderLink(link, index))
        )}
      </Box>
    </Box>
  );
}

export default Navbar;
