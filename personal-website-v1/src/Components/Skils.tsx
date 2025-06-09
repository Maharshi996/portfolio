import React from "react";
import { Box, Typography } from "@mui/material";
import Seperator from "./Seperator.tsx";
import { urlFor } from "../utils-sanity/imageBuilder.js";

function Skils(props) {
  const { links } = props?.data;
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          padding: "5vw 15vw",
          gap: "5vw",
        }}
      >
        {links?.map((skill: any, index: number) => {
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
                  height: "4vw",
                  width: "4vw",
                }}
              />
              <Typography key={index}>{skill?.label}</Typography>
            </Box>
          );
        })}
      </Box>
      <Seperator />
    </Box>
  );
}

export default Skils;
