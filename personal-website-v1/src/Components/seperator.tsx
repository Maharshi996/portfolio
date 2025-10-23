import React from "react";
import { Box } from "@mui/material";

function Seperator() {
  return (
    <Box
      sx={{
        padding: "0vw 8vw",
        display: "flex",
        gap: "3vw",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "violet",
          fontWeight: "bold",
          height: "0.5vw",
          width: "0.5vw",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          backgroundColor: "violet",
          fontWeight: "bold",
          height: "0.5vw",
          width: "0.5vw",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          width: "80vw",
          height: "0.1vw",
          backgroundColor: "violet",
        }}
      />
      <Box
        sx={{
          backgroundColor: "violet",
          fontWeight: "bold",
          height: "0.5vw",
          width: "0.5vw",
          borderRadius: "50%",
        }}
      />
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
  );
}

export default Seperator;
