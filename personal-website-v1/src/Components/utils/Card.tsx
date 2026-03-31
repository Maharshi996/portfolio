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
        backdropFilter: "blur(10px)",
        width: isMobile ? "100%" : isTablet ? "100%" : "22vw",
        height: isMobile ? "fit-content" : "30vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? "4vw" : isTablet ? "1.5vw" : "1vw",
        justifyContent: "space-between",
        position: "relative",
        transition: "transform 0.6s ease-in-out, box-shadow 0.6s ease-in-out",
        ":hover": {
          transform: "scale(1.03)",
          boxShadow: "0px 10px 15px rgba(74, 69, 74, 0.4)",
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
            height: isMobile ? "fit-content" : "12vw",
          }}
        />
        <Typography
          sx={{
            fontSize: isMobile ? "4vw" : isTablet ? "1.8vw" : "1vw",
            fontWeight: "bold",
            paddingX: isMobile ? "4vw" : "0.8vw",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: isMobile ? "3.8vw" : isTablet ? "1.2vw" : "1vw",
            paddingX: isMobile ? "4vw" : "0.8vw",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "0vw 4vw" : "0.8vw",
        }}
      >
        {links?.map((link: any, idx: number) => (
          <Link
            key={idx}
            link={link}
            sx={{
              textShadow: "0px 0px 10px rgba(230, 149, 235, 1)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Card;
