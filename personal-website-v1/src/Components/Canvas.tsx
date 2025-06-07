import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { urlFor } from "../lib/imageBuilder";

function Canvas(props) {
  const { longDescription, shortDescription, name, buttons, images } =
    props?.data;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "60% 40%",
        height: "100vw",
        background: "linear-gradient(to left, #000000 0%)",
        padding: "4vw 6vw",
        gap: "3vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          height: "100%",
          gap: "5vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            gap: "3vw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              height: "fit-content",
              alignItems: "baseline",
              gap: "1vw",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              {longDescription}
            </Typography>
            <Box
              sx={{
                backgroundColor: "violet",
                fontWeight: "bold",
                height: "0.5vw",
                width: "0.5vw",
                borderRadius: "50%",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              gap: "4vw",
            }}
          >
            <Box
              sx={{
                width: "15vw",
                height: "0.3vw",
                backgroundColor: "violet",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: "#FFFFFF",
                fontWeight: "bold",
                textAlign: "center",
                letterSpacing: "0.3vw",
              }}
            >
              {shortDescription}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "bold",
              textAlign: "left",
              fontSize: "4vw",
            }}
          >
            {name}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "left", gap: "2vw" }}>
            {buttons?.map((button, idx) => {
              return (
                <Button
                  key={idx}
                  variant="contained"
                  color={button?.variant}
                  onClick={button.onClick}
                  sx={{ borderRadius: "0px" }}
                >
                  {button.label}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            height: "30vw",
            width: "30vw",
            borderRadius: "50%",
            border: "1vw solid violet",
            boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.8)",
          }}
        >
          {/* <Box
            component={"img"}
            src={urlFor(images?.[0]?.asset?._ref)?.url()}
            alt="Placeholder"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          /> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Canvas;
