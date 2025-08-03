import { Box, List, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { urlFor } from "../../utils-sanity/imageBuilder.js";
import ListOfExperiences from "./ListOfExperiences.tsx";
import { PortableText } from "@portabletext/react";

function Experience(item) {
  const [content, setContent] = React.useState<any[]>([]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: " 35% 65%",
        height: "fit-content",
        gap: "3vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4vw",
        }}
        key={item?.companyName}
      >
        <Box sx={{ display: "flex", gap: "2vw", alignItems: "center" }}>
          <Box
            component="img"
            src={urlFor(item?.images?.[0]?.asset?._ref).url()}
            alt={`${item?.companyName}-photo`}
            sx={{
              width: "5vw",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              color: "white",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "1.5vw",
                fontWeight: "bold",
                marginTop: "1vw",
              }}
            >
              {item?.companyName}
            </Typography>
            <Box sx={{ display: "flex", gap: "1vw" }}>
              <Typography>{` From ${item?.startDate} - `}</Typography>
              {item?.present ? (
                <Typography>Present</Typography>
              ) : (
                <Typography>{item?.endDate}</Typography>
              )}
            </Box>
          </Box>
        </Box>
        <ListOfExperiences
          experiences={item?.experience}
          setContent={setContent}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          // boxShadow: "0px 0px 5px rgba(230, 149, 235, 0.8)",
          padding: "2vw",
          color: "white",
          maxHeight: "20vw",
          overflowY: "auto",
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "violet",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar": {
            width: "0.3vw",
          },
        }}
      >
        <PortableText
          value={content}
          components={{
            block: ({ children }) => (
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1.2vw",
                  marginBottom: "1vw",
                }}
              >
                {children}
              </Typography>
            ),
          }}
        />
      </Box>
    </Box>
  );
}

export default Experience;
