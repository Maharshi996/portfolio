import { Box } from "@mui/material";
import { useDeviceType } from "../../utils/compatible.ts";

export const Link = ({ link, sx }: any) => {
  const { isMobile, isTablet } = useDeviceType();
  return (
    <Box
      sx={{
        ...sx,
        a: {
          color: "white",
          fontSize: isMobile ? "4vw" : isTablet ? "1.5vw" : "1vw",
          textDecoration: "none",
          margin: isMobile ? "4vw" : isTablet ? "2vw" : " 0 1vw",
          position: "relative",
          display: "inline-block",
          transition: "color 0.3s ease",
        },
        "a:hover": {
          color: "purple",
        },
        "a::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          height: "2vw",
          width: 0,
          transition: "width 300ms ease",
        },
        "a:hover::after": {
          width: "100%",
        },
      }}
    >
      <a href={link?.path} target="_blank" rel="noopener noreferrer">
        {link?.label}
      </a>
    </Box>
  );
};
