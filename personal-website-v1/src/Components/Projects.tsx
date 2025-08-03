import React from "react";
import { Box } from "@mui/material";
import Card from "./utils/Card.tsx";
import Seperator from "./Seperator.tsx";

function Projects(props: any) {
  const { card, id } = props?.data;

  return (
    <Box sx={{ backgroundColor: "black" }} id={id}>
      <Box
        sx={{
          color: "white ",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1vw",
          padding: "5vw 15vw",
        }}
      >
        {/* Carousel with Arrow Buttons */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "69vw",
          }}
        >
          {/* Left Arrow */}
          <Box
            component="button"
            onClick={() => {
              const carousel = document.getElementById("carousel-container");
              if (carousel) {
                carousel.scrollBy({ left: -300, behavior: "smooth" });
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
              gap: "1vw",
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
                  flex: "0 0 auto",
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
              const carousel = document.getElementById("carousel-container");
              if (carousel) {
                carousel.scrollBy({ left: 300, behavior: "smooth" });
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
