import React from "react";
import { Box } from "@mui/material";
import Card from "./utils/Card.tsx";
import Seperator from "./seperator.tsx";
import { useDeviceType } from "../utils/compatible.ts";

function Projects(props: any) {
  const { card, id } = props?.data;
  const { isMobile, isTablet } = useDeviceType();
  const visibleCount = isMobile ? 1 : isTablet ? 2 : 3.5;
  const gap = "1vw";
  const itemWidth = `calc((100% - (${
    visibleCount - 1
  } * ${gap})) / ${visibleCount})`;

  return (
    <Box id={id}>
      <Box
        sx={{
          color: "white ",
          display: "block",
          gap: "1vw",
          padding: isMobile ? "8vw 15vw" : "4vw 15vw",
        }}
      >
        {/* Carousel with Arrow Buttons */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: isMobile || isTablet ? "99%" : "69vw",
          }}
        >
          {/* Left Arrow */}
          <Box
            component="button"
            onClick={() => {
              const carousel = document.getElementById(
                "carousel-container"
              ) as HTMLDivElement | null;
              if (carousel) {
                const cardWidth = carousel.clientWidth / visibleCount;
                carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
              }
            }}
            sx={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              background: "rgba(0,0,0,0.5)",
              border: "none",
              color: "white",
              borderRadius: "50%",
              width: 40,
              height: 40,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ":hover": {
                background: "rgba(203, 99, 193, 0.5)",
              },
            }}
          >
            &#8592;
          </Box>
          {/* Carousel */}
          <Box
            id="carousel-container"
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              gap: isMobile || isTablet ? "4vw" : "1vw",
              paddingBottom: "1vw",
              width: "100%",
              scrollBehavior: "smooth",
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, Opera
              },
            }}
          >
            {card?.map((card: any, idx: number) => (
              <Box
                key={idx}
                sx={{
                  flex: `0 0 ${itemWidth}`,
                  scrollSnapAlign: "start",
                }}
              >
                <Card {...card} />
              </Box>
            ))}
          </Box>
          {/* Right Arrow */}
          <Box
            component="button"
            onClick={() => {
              const carousel = document.getElementById(
                "carousel-container"
              ) as HTMLDivElement | null;
              if (carousel) {
                const cardWidth = carousel.clientWidth / visibleCount;
                carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
              }
            }}
            sx={{
              position: "absolute",
              right: -15,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              background: "rgba(0,0,0,0.5)",
              border: "none",
              color: "white",
              borderRadius: "50%",
              width: 40,
              height: 40,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ":hover": {
                background: "rgba(203, 99, 193, 0.5)",
              },
            }}
          >
            &#8594;
          </Box>
        </Box>
      </Box>
      <Seperator />
    </Box>
  );
}

export default Projects;
