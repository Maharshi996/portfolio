import React, { useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import { usePageContext } from "../Context/pageContext";
import { Typography } from "@mui/material";

function Navbar(props) {
  const { data } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        gap: "5vw",
        padding: "0 2vw",
        background: "linear-gradient(to left, #000000 0%)",
        color: "white",
        height: "5vw",
      }}
    >
      {data?.links?.map((link, index) => {
        return <Typography key={index}> {link?.label}</Typography>;
      })}
    </Box>
  );
}

export default Navbar;
