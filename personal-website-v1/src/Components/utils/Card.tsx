import React from "react";
import { Box, Typography } from "@mui/material";
import { urlFor } from "../../utils-sanity/imageBuilder";

function Card(props) {
  const { title, description, images, links } = props;

  return (
    <Box
      key={props?.data?._key}
      sx={{
        color: "white",
        border: "1px solid purple",
        backdropFilter: "blur(10px)",
        width: "20vw",
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
        }}
      >
        <Box
          component="img"
          src={urlFor(images?.[0]?.asset?._ref).url()}
          alt={`${title}-photo`}
          sx={{
            width: "18vw",
          }}
        />
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
}

export default Card;
