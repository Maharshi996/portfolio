import React from "react";
import { Box, Typography, GlobalStyles } from "@mui/material";
import { urlFor } from "../../utils-sanity/imageBuilder";
import { useDeviceType } from "../../utils/compatible.ts";
import { Link } from "./Link.tsx";
import { keyframes } from "@mui/material/styles";

function Card(props: any) {
  const { title, description, images, links } = props;
  const { isMobile, isTablet } = useDeviceType();

  const spin = keyframes`
    0% {
      --angle: 0deg;
    }
    100% {
      --angle: 360deg;
    }
  `;

  return (
    <>
      <GlobalStyles
        styles={`@property --angle{syntax: "<angle>"; initial-value: 0deg; inherits: false;}`}
      />
      <Box
        key={props?.data?._key}
        sx={{
          color: "white",
          background: "black",
          position: "relative",
          borderRadius: "0.5vw",
          width: isMobile ? "100%" : isTablet ? "100%" : "22vw",
          height: isMobile ? "fit-content" : "fit-content",
          boxSizing: "border-box",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "4vw" : isTablet ? "1.5vw" : "1vw",
          justifyContent: "space-between",
          zIndex: 1,
          ":hover": {
            boxShadow: "0px 0px 10px rgba(230, 149, 235, 0.8)",
          },
          "--angle": "0deg",
          "::after, ::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            padding: "2px",
            borderRadius: "inherit",
            background:
              "conic-gradient(from var(--angle), black,black,black,purple)",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            animation: `${spin} 8s linear infinite`,
            pointerEvents: "none",
            zIndex: 0,
          },
          "::before": {
            filter: "blur(12px)",
            opacity: 0.6,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            borderRadius: "inherit",
            m: "2px",
            background: "rgba(0,0,0,0.45)",
            width: "calc(100% - 4px)",
            height: "calc(100% - 4px)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: isMobile ? "4vw" : isTablet ? "1.5vw" : "1vw",
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
                height: isMobile ? "50vw" : "13vw",
                borderTopLeftRadius: "0.5vw",
                borderTopRightRadius: "0.5vw",
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
      </Box>
    </>
  );
}

export default Card;
