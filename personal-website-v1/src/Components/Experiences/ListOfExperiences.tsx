import { Box, Typography } from "@mui/material";
import React from "react";

function ListOfExperiences(props) {
  const { experiences, setContent } = props;
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  return (
    <Box
      sx={{
        color: "white",
      }}
    >
      {experiences?.map((item: any, index: number) => {
        return (
          <Box
            key={item?.role + index}
            onClick={() => {
              setContent(item?.richDescription);
              setSelectedIndex(index);
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "1vw",
              marginBottom: "1.5vw",

              borderRadius: "0.5vw",
              boxShadow:
                selectedIndex === index
                  ? "0px 0px 5px rgba(230, 149, 235, 0.8)"
                  : "unset",
              backdropFilter: selectedIndex === index ? "blur(10px)" : "unset",
            }}
          >
            <Typography>{item?.role}</Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1vw",
                alignItems: "center",
                marginTop: "1vw",
              }}
            >
              <Typography>{` From ${item?.startDate} - `}</Typography>
              {item?.present ? (
                <Typography>Present</Typography>
              ) : (
                <Typography>{item?.endDate}</Typography>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default ListOfExperiences;
