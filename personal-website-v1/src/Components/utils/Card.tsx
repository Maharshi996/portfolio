import React from "react";
import { Box, Typography } from "@mui/material";
import { urlFor } from "../../utils-sanity/imageBuilder";
import { useDeviceType } from "../../utils/compatible.ts";

function Card(props) {
  const { title, description, images, links } = props;
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  return (
    <Box
      key={props?.data?._key}
      sx={{
        color: "white",
        border: "1px solid purple",
        backdropFilter: "blur(10px)",
        width: isMobile || isTablet ? "100%" : "20vw",
        height: "auto",
        boxSizing: "border-box",
        padding: "1vw",
        ":hover": {
          boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1vw",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          component="img"
          src={urlFor(images?.[0]?.asset?._ref).url()}
          alt={`${title}-photo`}
          sx={{
            width: "100%",
            height: "auto",
          }}
        />
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
}

export default Card;
