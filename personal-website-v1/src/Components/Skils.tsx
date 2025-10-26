import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Seperator from "./seperator.tsx";
import { urlFor } from "../utils-sanity/imageBuilder.js";
import { useDeviceType } from "../utils/compatible.ts";

function Skils(props: any) {
  const { links, id } = props?.data;
  const { isMobile, isTablet, isDesktop } = useDeviceType();
  const initialCount = isDesktop ? 16 : 6;
  const [displayCount, setDisplayCount] = useState(initialCount);
  const total = links?.length ?? 0;
  const canShowMore = displayCount < total;

  useEffect(() => {
    setDisplayCount(initialCount);
  }, [initialCount]);

  const handleToggle = () => {
    setDisplayCount(canShowMore ? displayCount + initialCount : initialCount);
  };

  return (
    <Box
      sx={{
        color: "white",
      }}
      id={id}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "repeat(2,1fr)"
            : isTablet
            ? "repeat(3,1fr)"
            : "repeat(4,1fr)",
          padding: isMobile ? "10vw 8vw" : isTablet ? " 6vw 8vw" : "4vw 15vw",
          gap: isMobile ? "8vw" : isTablet ? "5vw" : "4vw",
        }}
      >
        {(links ?? [])
          .slice(0, displayCount)
          .map((skill: any, index: number) => {
            return (
              <Box
                key={`${skill}-${index}`}
                sx={{
                  display: "flex",
                  gap: "2vw",
                  alignItems: "center",
                  ":hover": {
                    boxShadow: "0px 0px 10px rgba(230, 149, 235, 0.8)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={urlFor(skill?.images?.[0]?.asset?._ref).url()}
                  alt={skill?.label}
                  sx={{
                    height: isMobile ? "10vw" : isTablet ? "6vw" : "4vw",
                    width: isMobile ? "10vw" : isTablet ? "6vw" : "4vw",
                  }}
                />
                <Typography
                  key={index}
                  sx={{
                    fontSize: isMobile ? "4vw" : isTablet ? "1.8vw" : "1vw",
                  }}
                >
                  {skill?.label}
                </Typography>
              </Box>
            );
          })}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2vw",
          width: "fit-content",
          margin: "auto",
        }}
        onClick={handleToggle}
      >
        <Typography
          sx={{
            textShadow: "0px 0px 10px rgba(230, 149, 235, 0.8)",
            fontSize: isDesktop ? "1vw" : isTablet ? "1.5vw" : "3vw",
            margin: isDesktop
              ? "0vw auto 4vw auto"
              : isTablet
              ? "0vw auto 4vw auto"
              : "0vw auto 10vw auto",
          }}
        >
          {canShowMore ? " SHOW MORE" : "SHOW LESS"}
        </Typography>
        <Box
          component="img"
          src="/assets/arrow-down-angle-svgrepo-com.svg"
          sx={{
            width: isDesktop ? "1vw" : isTablet ? "1.5vw" : "3vw",
            height: isDesktop ? "fit-content" : "3vw",
            color: "white",
            transform: canShowMore ? "rotate(0deg)" : "rotate(180deg)",
            marginBottom: isDesktop ? "4vw" : isTablet ? "4vw" : "10vw",
          }}
        />
      </Box>
      <Seperator />
    </Box>
  );
}

export default Skils;
