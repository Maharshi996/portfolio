import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { urlFor } from "../utils-sanity/imageBuilder";
import Seperator from "./Seperator.tsx";

function Canvas(props) {
  const { longDescription, shortDescription, name, buttons, images, id } =
    props?.data;

  return (
    <Box sx={{ background: "linear-gradient(to left, #000000 0%)" }} id={id}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "60% 40%",
          height: "fit-content",

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
            padding: "8vw 8vw",
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

        <Box
          sx={{
            position: "relative",
            width: "35vw",
            height: "33vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "4vw",
              right: "5vw",
              left: 0,
              margin: "0 auto",
              height: "30vw",
              width: "30vw",
              borderRadius: "50%",
              border: "1vw solid violet",
              boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.8)",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              height: "33vw",
              width: "30vw",
              position: "relative",
              overflow: "hidden",
              top: "2vw",
              right: "2vw",
              borderRight: "1px solid purple",
              borderBottom: "1px solid purple",
              backgroundImage:
                "linear-gradient(to right, rgba(215, 202, 202, 0), rgb(0, 0, 0))",
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              src={urlFor(images?.[0]?.asset?._ref).url()}
              alt="Maharshi-photo"
              sx={{
                height: "33vw",
                width: "26vw",
                objectFit: "cover",
                position: "absolute",
                top: "5vw",
                left: "1vw",
                zIndex: 3,
              }}
            />
          </Box>
        </Box>
      </Box>
      <Seperator />
    </Box>
  );
}

export default Canvas;
