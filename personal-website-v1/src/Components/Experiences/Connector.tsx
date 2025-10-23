import React from "react";
import { Box } from "@mui/material";

type ConnectorProps = {
  isFirst: boolean;
  isLast: boolean;
  isMobile: boolean;
  dotSizeVw?: number; // diameter in vw
  lineWidthVw?: number;
};

export default function Connector(props: ConnectorProps) {
  const { isFirst, isLast, isMobile, dotSizeVw = 2, lineWidthVw = 0.5 } = props;
  const dotRadiusVw = dotSizeVw / 2;

  return (
    <Box
      sx={{
        position: "relative",
        width: "1.2vw",
        minWidth: "1.2vw",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: `${dotSizeVw}vw`,
          height: `${dotSizeVw}vw`,
          borderRadius: "50%",
          background: "#e695eb",
          boxShadow: "0 0 0.4vw rgba(230, 149, 235, 0.8)",
        }}
      />
      {!isFirst && (
        <Box
          sx={{
            position: "absolute",
            top: isMobile ? "calc(-3vw)" : "calc(-1.5vw)",
            bottom: `calc(50% - ${dotRadiusVw}vw)`,
            left: "50%",
            transform: "translateX(-50%)",
            width: `${lineWidthVw}vw`,
            background:
              "linear-gradient(180deg, rgba(230,149,235,0.3), rgba(230,149,235,0.7))",
          }}
        />
      )}
      {!isLast && (
        <Box
          sx={{
            position: "absolute",
            top: `calc(50% + ${dotRadiusVw}vw)`,
            bottom: isMobile ? "calc(-3vw)" : "calc(-1.5vw)",
            left: "50%",
            transform: "translateX(-50%)",
            width: `${lineWidthVw}vw`,
            background:
              "linear-gradient(180deg, rgba(230,149,235,0.7), rgba(230,149,235,0.3))",
          }}
        />
      )}
    </Box>
  );
}
