import React from "react";
import { Box, Typography } from "@mui/material";
import { urlFor } from "../../utils-sanity/imageBuilder";
import { useDeviceType } from "../../utils/compatible.ts";
import { Link } from "./Link.tsx";

function Card(props: any) {
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
        height: "30vw",
        boxSizing: "border-box",
        padding: "1vw",
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? "4vw" : isTablet ? "1.5vw" : "1vw",
        justifyContent: "space-between",
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
          width: "100%",
          textAlign: "start",
        }}
      >
        <Box
          component="img"
          src={urlFor(images?.[0]?.asset?._ref).url()}
          alt={`${title}-photo`}
          sx={{
            width: "100%",
            height: "10vw",
          }}
        />
        <Typography
          sx={{
            fontSize: isMobile ? "4vw" : isTablet ? "1.8vw" : "1vw",
            fontWeight: "bold",
          }}
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
          <Link
            key={idx}
            link={link}
            sx={{ textShadow: "0px 0px 10px rgba(230, 149, 235, 1)" }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Card;
