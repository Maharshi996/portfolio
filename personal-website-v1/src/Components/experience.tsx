import { Box, List, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { urlFor } from "../utils-sanity/imageBuilder";
import ListOfExperiences from "./ListOfExperiences.tsx";
import { PortableText } from "@portabletext/react";

function Experience(props) {
  const [content, setContent] = React.useState<any[]>([]);

  const { experience } = props?.data;

  return (
    <Box
      sx={{
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: " 35% 65%",
          height: "fit-content",
          padding: "4vw 8vw",
          gap: "3vw",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vw" }}>
          {experience?.map((item: any, index: number) => {
            return (
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
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0px 0px 5px rgba(230, 149, 235, 0.8)",
            padding: "1vw",
            color: "white",
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
                    textAlign: "justify",
                  }}
                >
                  {children}
                </Typography>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
