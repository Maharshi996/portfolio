import React from "react";
import { Box, Typography } from "@mui/material";

type Experience = {
  role?: string;
  startDate?: string;
  endDate?: string;
  present?: boolean;
  richDescription?: string;
};

type ExperienceCardProps = {
  item: Experience;
  isMobile: boolean;
  selected: boolean;
  onSelect: () => void;
};

export default function ExperienceCard({
  item,
  isMobile,
  selected,
  onSelect,
}: ExperienceCardProps) {
  return (
    <Box
      onClick={onSelect}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: isMobile ? "2vw" : "1vw",
        borderRadius: "0.5vw",
        boxShadow: selected
          ? "0vw 0vw 0.35vw rgba(230, 149, 235, 0.8)"
          : "unset",
        backdropFilter: selected ? "blur(0.7vw)" : "unset",
        marginLeft: isMobile ? "2vw" : "1vw",
        flex: 1,
      }}
    >
      <Typography sx={{ fontSize: isMobile ? "3.5vw" : "1.5vw" }}>
        {item?.role}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1vw",
          alignItems: isMobile ? "flex-start" : "center",
          marginTop: "1vw",
        }}
      >
        <Typography
          sx={{ fontSize: isMobile ? "3vw" : "1.2vw" }}
        >{` From ${item?.startDate} - `}</Typography>
        {item?.present ? (
          <Typography sx={{ fontSize: isMobile ? "3vw" : "1.2vw" }}>
            Present
          </Typography>
        ) : (
          <Typography sx={{ fontSize: isMobile ? "3vw" : "1.2vw" }}>
            {item?.endDate}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
