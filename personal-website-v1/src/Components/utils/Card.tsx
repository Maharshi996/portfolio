import React from "react";
import { Box, Typography } from "@mui/material";
import { urlFor } from "../../utils-sanity/imageBuilder";
import { useDeviceType } from "../../utils/compatible.ts";
import { Link } from "./Link.tsx";

function Card(props) {
  const { title, description, images, links } = props;
  const { isMobile, isTablet } = useDeviceType();

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
          boxShadow: "0px 0px 10px rgba(230, 149, 235, 0.8)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "4vw" : isTablet ? "1.5vw" : "1vw",
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
        <Typography
          sx={{ fontSize: isMobile ? "4vw" : isTablet ? "1.8vw" : "1vw" }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: isMobile ? "4vw" : isTablet ? "1.5vw" : "1vw" }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {links?.map((link: any, idx: number) => (
          <Link key={idx} link={link} />
        ))}
      </Box>
    </Box>
  );
}

export default Card;
